import styled from 'styled-components';



export const Item = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  width: ${({ theme }) => `${theme.spacing(100)}`};
`;
