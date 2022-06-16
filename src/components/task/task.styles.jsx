import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  background-color: #f3f2f3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border: .5px solid black;
  border-radius: 2px;
  margin-bottom: 8px;
  max-width: 360px;
  background-color: ${props => (props.isDragging ? '#6B5B95' : '#e5e5dc')}
`