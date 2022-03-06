import React from 'react';
import styled from 'styled-components';


const Header = () => {

    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/user-svgrepo-com.svg" />
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
display:flex;
align-items:center;
padding:0 36px;
height:70px;
background:#090b13;
`
const Logo = styled.img`
width:80px;
`
const NavMenu = styled.div`
display:flex;
flex-grow:1;
margin-left:25px;
align-items:center;
a{
    position:relative;
    display:flex;
    align-items:center;
    padding: 0 12px;
    height:40px;
    overflow-x:hidden;
    cursor: pointer;
    img{
       height: 20px;
       margin-right:3px;
    }
    span{
        font-size:13px
        letter-spacing:1.42px;
    }
}
a::after{
position:absolute;
content:"";
bottom:0;
left:0;
height:2px;
width:95%;
transform:scaleX(0);
opacity:0;
background: blue;
transition:.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
a:hover::after{
   left:10px;
   transform:scaleX(1);
   opacity:1;
}
`
const UserImg = styled.img`
height:48px;
width:48px;
cursor:pointer;
`