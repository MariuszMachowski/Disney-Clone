import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
const Detail = ({ movies }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(movies[id - 1]);
    }, [])


    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="background" />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt="title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play-btn" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play-btn" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="group" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.subTitle}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    movies: state.movies
})
export default connect(mapStateToProps, null)(Detail);

const Container = styled.div`
min-height: calc(100vh - 70px -5vh);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
img{
    width: 100%;
    height:100%;
    object-fit:cover;
    object-position:top;
}
`
const ImageTitle = styled.div`
height:30vh;
min-height:170px;
width: 35vw;
min-width:200px;
margin:5vh 0 5vh -2vw;
img{
    width: 100%;
    height:100%;
    object-fit:contain;
}
`

const Controls = styled.div`
display:flex;
align-items:center;
`
const PlayButton = styled.button`
display: flex;
align-items:center;
margin-right:20px;
border-radius:4px;
font-size:15px;
padding: 3px 20px;
background: rgb(249,249,249);
border:rgb(249,249,249) solid 1px;
letter-spacing:1px;
cursor: pointer;
transition: .2s;
&:hover{
    background: rgb(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`
background:rgba(10,10,10,.45);
color:white;
text-transform:uppercase;
&:hover{
    background:rgba(20,20,20,.8);
}
`
const AddButton = styled.button`
display: flex;
align-items:center;
justify-content:center;
width:38px;
height:38px;
margin-right:16px;
border-radius:50%;
border: 2px solid rgb(249,249,249);
background:rgba(0,0,0,.6);
color:white;
cursor:pointer;
span{
    font-size:24px;
}
`
const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0,.9);
`
const Subtitle = styled.div`
font-size:15px;
color: rgb(249,249,249);
margin:20px 0 10px;
`
const Description = styled.div`
width:50vw;
line-height:1.4;
font-size:19px;
color: rgb(249,249,249);
`