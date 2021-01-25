import styled from "styled-components";

export const Container = styled.section`
  padding: 30px;
  text-align: center;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Cover = styled.div`
  @media (min-width: 1000px) {
    text-align: start;
    margin-right: 100px;
  }
`;

export const SubCover = styled.div`
  background-color: hsl(12, 88%, 99%);
  display: flex;
  align-items: center;
  height: 45px;

  @media (min-width: 1000px) {
    background-color: transparent;
  }
`;

export const Title = styled.h2``;

export const Description = styled.p`
  font-size: 18px;
  color: gray;
  padding-bottom: 40px;
`;

export const Lists = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Items = styled.li`
  list-style: none;
  text-align: left;
  @media (min-width: 1000px) {
    p {
      margin-left: 74px;
    }
  }

`;

export const Button = styled.button`
  background-color: hsl(12, 88%, 59%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  width: 74px;
  border-radius: 35px;
  border: none;
  text-align: center;
`;

export const SubTitle = styled.h3`
margin-left: 20px;
text-align: left;
  @media (min-width: 1000px) {
  }
`;
