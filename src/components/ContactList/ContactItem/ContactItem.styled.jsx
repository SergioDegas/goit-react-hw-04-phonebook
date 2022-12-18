import styled from 'styled-components';


export const TextStyled = styled.p`
  margin-right: ${({ theme }) => `${theme.spacing(15)}`};
  margin-left: auto;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  width: ${({ theme }) => `${theme.spacing(20)}`};
  color: #fff;
  border-radius: ${({ theme }) => `${theme.spacing(3)}`};

  background-color: ${({ theme }) => `${theme.colors.blue}`};
  cursor: pointer;
`;