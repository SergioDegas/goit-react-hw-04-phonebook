import styled from 'styled-components';



export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(6)}`};
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 26px;
`;

export const Input = styled.input`
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border: 1px solid #2a2a2a;
  border-radius: ${({ theme }) => `${theme.spacing(3)}`};
  font-family: sans-serif;
  font-size: ${({ theme }) => `${theme.spacing(4)}`};
  outline: none;
  margin-top: ${({ theme }) => `${theme.spacing(2)}`};
  ::placeholder {
    color: ${({ theme }) => `${theme.colors.blue}`};
    font-size: ${({ theme }) => `${theme.spacing(4)}`};
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: ${({ theme }) => `${theme.spacing(33)}`};
  color: #fff;
  border-radius: ${({ theme }) => `${theme.spacing(3)}`};
  margin-top: ${({ theme }) => `${theme.spacing(3)}`};
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => `${theme.colors.blue}`};
  cursor: pointer;
`;