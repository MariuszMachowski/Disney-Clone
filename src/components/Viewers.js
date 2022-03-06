import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="viewers" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="viewers" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="viewers" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="viewers" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="viewers" />
            </Wrap>
        </Container>
    );
}

export default Viewers;

const Container = styled.div`
display:flex;
justify-content:space-around;
margin-top:30px;
`
const Wrap = styled.div`
flex-basis:16%;
height:70px;
border:3px solid rgba(249,249,249,.1);
border-radius:10px;
position: relative;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
transition: .25s;
cursor: pointer;
img{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height:80%;
    object-fit:cover;
}
&:hover{
    transform: scale(1.05);
    border-color:rgba(249,249,249,.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0 30px 22px -10px;
}
`