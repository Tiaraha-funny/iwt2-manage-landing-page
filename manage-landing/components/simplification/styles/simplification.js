import styled from "styled-components";

export const Container = styled.section`
  background-color: hsl(12, 88%, 59%);
  margin-left: -80px;
  margin-top: 80px;
  text-align: center;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: #ffffff;
  color: hsl(12, 88%, 59%);
  padding: 12px;
  width: 130px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 0px 3px 3px grey;
  @media (min-width: 1000px) {
    height: 40px;
    margin-right: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  color: #ffffff;

  @media (min-width: 1000px) {
    max-width: 500px;
    text-align: start;
    padding-left: 100px;
  }
`;
