import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
`;

export const PageTitle = styled.p`
  width: 900px;
  min-height: 100px;
  border-radius: 80px;
  font-weight: 700;
  font-size: 52px;
  text-align: center;
  padding-top: 30px;

  box-shadow: 0px 0px 46px 15px hsla(323, 87%, 50%, 0.664);
  background-color: #ffe6ff;
  color: hsla(323, 87%, 50%, 0.664);
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  text-align: center;

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
`;
