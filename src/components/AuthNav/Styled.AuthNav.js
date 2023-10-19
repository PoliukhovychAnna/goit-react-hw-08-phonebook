import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const StyledLink = styled(NavLink)`
  width: 130px;
  height: 35px;
  border-radius: 30px;
  margin-left: 20px;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 500;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: hsla(323, 87%, 50%, 0.664);
  border: 1px solid #111;
  justify-content: center;

  cursor: pointer;
  text-decoration: none;
  color: black;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 26px 8px hsla(323, 87%, 50%, 0.664);
    background-color: #000428;
    color: hsla(323, 87%, 50%, 0.664);
    transform: scale(1.05);
  }
`;
