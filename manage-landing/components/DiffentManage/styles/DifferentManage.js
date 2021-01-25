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
  margin:0;
}
`;

export const SubCover = styled.div`
  background-color: hsl(12, 88%, 99%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 57px;

  @media (min-width: 1000px) {
    background-color: transparent;
    margin-left: -20px;
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
`;
export const Button = styled.button`
  background-color: hsl(12, 88%, 59%);
  padding: 20px;
  width: 74px;
  border-radius: 35px;
  border: none;
  text-align: center;
`;

export const SubTitle = styled.h4``;
