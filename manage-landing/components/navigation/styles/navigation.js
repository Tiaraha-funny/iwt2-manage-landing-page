import styled from "styled-components";

export const Container = styled.nav`
background-color: #ffffff;
box-shadow: 2px 3px 5px black;
text-align: center;
width: 60%;
margin: auto;
`

export const Lists = styled.ul`
display: flex;
flex-direction: column;
line-height: 40px;

@media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
`

export const Items = styled.li`
list-style: none;
`

export const Anchor = styled.a`
text-decoration: none;
`