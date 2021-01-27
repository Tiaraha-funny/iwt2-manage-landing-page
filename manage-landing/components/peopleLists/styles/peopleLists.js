import styled from "styled-components";

export const Container = styled.section`
text-align: center;
`;
export const Title = styled.h2`
margin-bottom: 120px;
`;

export const Lists = styled.ul`
padding: 20px;
margin: 0;
@media (min-width: 1000px) { 
  margin:0;
}
`;

export const Items = styled.li`
  list-style: none;
  background-color: hsl(0, 0%, 98%);
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;

  margin-bottom: 130px;

  @media (min-width: 1000px) {
    margin-right: 50px;
  }
`;
export const Description = styled.p`
  font-size: 18px;
  color: gray;
  padding: 10px;
  padding-bottom: 40px;
`;
export const Images = styled.img`
margin-top: -76px;
`;
export const Names = styled.h3``;

export const SlideImages = styled.div`
  position: relative;

  @media (min-width: 1000px) {
    display: flex;
    margin:0;
  }
`;

export const SlideDots = styled.div``;

export const Dots = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: transparent;
  border: 1px solid hsl(12, 88%, 59%);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  :hover {
    background-color: hsl(12, 88%, 59%);
  }
`;

export const DotIndicator = styled.a``;
