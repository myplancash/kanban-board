import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initialData';
import '@atlaskit/css-reset';
import Column from './column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    // reorder our column
  }

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
