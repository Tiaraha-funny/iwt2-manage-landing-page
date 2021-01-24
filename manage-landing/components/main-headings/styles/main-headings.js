import styled from "styled-components";

export const Container = styled.section`
  padding: 30px;
  margin: 0;
  text-align: center;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: left;

    .cover {
      max-width: 370px;
      margin-inline-end: 147px;
    }
  }
`;

export const Title = styled.img`
  width: 100%;
`;

export const SubTitle = styled.h1`
  font-size: 30px;
  color: hsl(228, 39%, 23%);
  @media (min-width: 1000px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: gray;
  padding-bottom: 40px;
`;
