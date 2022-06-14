import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
`

const TasksList = styled.div`
  padding: 8px;
`

const Title = styled.h3`
  padding: 8px;
`

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TasksList
              ref={provided.innerRef}
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