import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  &:focus {
    border-color: blue;
    background-color: white;
  }
`;
