import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Movies = ({ movies }) => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {
                    movies.map(movie => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} alt="movie" />
                            </Link>
                        </Wrap>
                    ))}
            </Content>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    movies: state.movies
})
export default connect(mapStateToProps, null)(Movies);

const Container = styled.div`
h4{
    margin-bottom:15px;
}
`
const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));
@media(max-width:600px){
    &{
        grid-gap:25px;
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
}
`
const Wrap = styled.div`
border-radius:10px;
overflow: hidden;
border:3px solid rgba(249,249,249,.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
transition: .25s;
cursor: pointer;
img{
    width: 100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    transform: scale(1.05);
    border-color:rgba(249,249,249,.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0 30px 22px -10px;
}
`