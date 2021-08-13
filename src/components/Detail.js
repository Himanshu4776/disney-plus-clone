import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/scale-back.jpeg" />
            </Background>
            <Imagetitle>
                <img src="/scale-front.png" alt="" />
            </Imagetitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"></img>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 <span>&bull;</span> 7m <span>&bull;</span> Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                A chinese mom who's sad to see when her grown son leaves gets another chane at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div `
min-height: calc(100vh -70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background = styled.div `
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
overflow: hidden;
z-index: -1;
opacity: 0.8;
img {
    width:100%;
    height: 100%;
    object-fit: cover;
}
`
const Imagetitle = styled.div `
height: 30vh;
width: 35vw;
min-height: 170px;
min-width: 200px;
// margin-top: 80px;

img {
    width: 100%;
    height: 100%;
    // margin-left: -60px;
    object-fit: contain;
    padding: 20px;
    // translate-X: -25%;
}
`
const Controls = styled.div`
display: flex;
flex-dierection: row;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 45px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
background: rgb (249,249,249);
border: none;
padding: 0px 20px;

&:hover {
background: rgb(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
color: rgb(249,249,249);
text-transform: uppercase;
`
const AddButton = styled.button`
width: 44px;
margin-right: 16px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background: rgba(0,0,0,0.6);
span {
    font-size: 35px;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`
const Subtitle = styled.div`
padding: 5px;
margin-top: 16px;
font-size: 12px;
`
const Description = styled.div`
max-width: 500px;
margin-top: 16px;
font-size: 15px;
`