import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="viewers" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="viewers" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="viewers" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="viewers" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="viewers" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    );
}

export default Viewers;

const Container = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
margin-top:30px;
padding: 20px 0 30px;
`
const Wrap = styled.div`
flex-basis:16%;
height:100px;
margin-bottom:15px;
border:3px solid rgba(249,249,249,.1);
border-radius:10px;
position: relative;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
transition: .25s;
cursor: pointer;
&:nth-child(4),&:nth-child(5){
    margin-bottom:0;
}

img{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 75%;
    height:75%;
    object-fit:cover;
}
video{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0;
    z-index:0;
}
&:hover{
    transform: scale(1.05);
    border-color:rgba(249,249,249,.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0 30px 22px -10px;
    video{
        opacity:1;
    }
}
@media(max-width:600px){
    &{
        flex-basis:90%;
        height:200px;
        margin-bottom:25px;
    }
}
`