import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

export const UserText = styled.p`
  font-weight: 700;
`;

export const AccentText = styled.span`
  color: hsla(323, 87%, 50%, 0.664);
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 30px;
  margin-right: 40px;
  margin-left: 15px;
  font-size: 18px;
  font-weight: 600;
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
