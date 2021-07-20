import React from 'react';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <h1>Recommended for You</h1>
            <Content>
                <Wrap>
                    <img src="/boy_birds_art.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="/boy_birds_art.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="/boy_birds_art.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="/boy_birds_art.jpg"></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div `

`
const Content = styled.div `
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div `
border-radius: 10px;
overflow: hidden;
borde: 3px solid (249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
cursor: pointer;

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

&:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    boder-color: rgba(249, 249,249,0.8);
    transition: all 250ms cubic-beizer(0.25, 0.46, 0.45, 0.94) 0s;
}
`