import styled from "styled-components"



export const Button = styled.button`

/* Auto layout */
padding: 10px 18px;
color: white;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid black;
transition: 0.4s ease-in;
cursor: pointer;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s ease-in;
}
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s ease-in;
  }
`;