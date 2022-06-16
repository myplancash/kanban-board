import React from 'react';
import Task from '../task/task.component';
import { Droppable } from 'react-beautiful-dnd';
import {Container, TasksList, Title } from './column.styles';


export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TasksList
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) =>
                <Task key={task.id} task={task} index={index} />
              )}
            {provided.placeholder}
          </TasksList>
          )}
        </Droppable>
      </Container>
    );
  }
}