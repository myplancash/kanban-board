import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: .5px solid #320d3e;
  padding: 1rem;
  background-color: #fff1e1;
`

export const TasksList = styled.div`
  padding: 1rem;
  border: .5px solid #320d3e;
  background-color: ${({isDraggingOver}) => isDraggingOver ? '#c6d7eb' : '#d9a5b3' };
  transition: background-color .2s ease;
`

export const Title = styled.h3`
  padding: 8px;
`