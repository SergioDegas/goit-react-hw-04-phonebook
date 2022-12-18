import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
  font-size: ${({ theme }) => `${theme.spacing(7)}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(7)}`};
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: ${({ theme }) => `${theme.spacing(3)}`};
  font-family: sans-serif;
  font-size: ${({ theme }) => `${theme.spacing(4)}`};
  outline: none;
  margin-top: ${({ theme }) => `${theme.spacing(1)}`};
  ::placeholder {
    color: ${({ theme }) => `${theme.colors.blue}`};
    font-size: ${({ theme }) => `${theme.spacing(4)}`};
  }
`;
