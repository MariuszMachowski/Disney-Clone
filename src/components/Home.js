import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import styled from 'styled-components';
import actions from '../redux/actions';
const Home = ({ add, movies }) => {

    useEffect(() => {
        if (movies.length === 0) {
            fetch('/disneyPlusMoviesData.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })
                .then(res => res.json())
                .then(data => {
                    add(data.movies)
                })
        }
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    );
}
const mapDispatchToProps = (dispatch) => ({
    add: movies => dispatch(actions.add(movies))
})
const mapStateToProps = (state) => ({
    movies: state.movies
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.main`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x:hidden ;
padding-bottom:50px;
&:before{
    content: "";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    z-index:-1;
}
`