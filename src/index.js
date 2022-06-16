import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initialData';
import '@atlaskit/css-reset';
import Column from './components/column/column.component';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  state = initialData;

  /* onDragStart = () => {
    document.body.style.color = '#FF7373';
    document.body.style.transition = "background-color 0.2s ease";
  }

  onDragUpdate = (update) => {
    const { destination } = update;

    const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
    document.body.style.backgroundColor = `rgba(255, 128, 237, ${opacity})`;
  } */

  onDragEnd = result => {

    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if(destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    //will have the same properties as our old column
    // over the new taskIDs

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }

    // new picture of our State,
    //i'm using object spread to mantain the old properties in our state object
    // but also invalidating the refereces of the past that i want to change
    const newState = {
      ...this.state,
      columns: {
        //this is good practice
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
    </DragDropContext>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
