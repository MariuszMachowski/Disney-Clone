import React, { useState } from 'react';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../user/actions';


const Header = ({ userInfo, addName, addEmail, addPhoto, remove }) => {
    const [isActive, setIsActive] = useState("");
    const history = useHistory();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const userName = result.user.displayName;
                const userEmail = result.user.email;
                const userPhoto = result.user.photoURL;
                addName(userName);
                addEmail(userEmail);
                addPhoto(userPhoto);
                history.push("/")
            })

    }
    const signOut = () => {
        auth.signOut()
            .then(() => {
                remove();
                history.push("/login")
            })
    }
    const moveToHomePage = () => {
        history.push("/")
    }

    const handleMenu = () => {
        if (isActive === "") {
            setIsActive('active')
        } else {
            setIsActive("")
        }
    }
    return (
        <Nav className={isActive}>
            <Logo src='/images/logo.svg' onClick={moveToHomePage} />
            {!userInfo.name ?
                <Login onClick={signIn}>Login</Login> :
                <>
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

                    <UserImgContainer>
                        <UserImg src={userInfo.photo} onClick={signOut} />
                    </UserImgContainer>
                    <BurgerMenu>
                        <aside className={isActive} onClick={handleMenu}>
                            <p></p>
                            <p></p>
                            <p></p>
                        </aside>
                        <div className={isActive}>
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
                        </div>
                    </BurgerMenu>
                </>
            }

        </Nav>
    );
}
const mapStateToProps = (state) => ({
    userInfo: state.user
})
const mapDispatchToProps = (dispatch) => ({
    addName: name => dispatch(actions.addName(name)),
    addEmail: email => dispatch(actions.addEmail(email)),
    addPhoto: photo => dispatch(actions.addPhoto(photo)),
    remove: () => dispatch(actions.deleteData())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Nav = styled.nav`
display:flex;
align-items:center;
padding:0 36px;
height:70px;
background:#090b13;
overflow-x:hidden;
`
const Logo = styled.img`
width:80px;
cursor: pointer;
`
const NavMenu = styled.div`
display:none;
@media(min-width:1025px){
    &{
display:flex;
flex-grow:1;
margin-left:25px;
align-items:center;
    }
}

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
transform-origin:left center;
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
const UserImgContainer = styled.div`
display:flex;
flex-grow:1;
justify-content:flex-end;
`
const BurgerMenu = styled.div`
display:none;
@media(max-width:1024px){
    &{
        display:block;
        margin-left:4vw;
    }

  aside{
      position:relative;
      width:25px;
      height:25px;
      p{
          position:absolute;
          top:0;
          left:0;
          width:30px;
          height:3px;
          background:#f9f9f9;
          transition:.25s;
      }
      p:nth-child(2){
          top:50%;
          transform: translateY(-50%)
      }
      p:nth-child(3){
          top:100%;
          transform: translateY(-100%)
      }
  }
  aside.active{
    p:nth-child(1){
        top:50%;
         transform:rotate(-45deg)
      }
    p:nth-child(2){
         opacity:0;
      }
    p:nth-child(3){
        top:50%;
         transform:rotate(45deg)
      }
  }
    div{
        position:fixed;
        display:flex;
        flex-direction:column;
        z-index:2;
        top:70px;
        left:0;
        right:0;
        bottom:0;
        background:#0063e5;
        transform:scaleX(0);
        transform-origin:right center;
        opacity:0;
        transition: .4s;
        a{
            display:flex;
            align-items:center;
            height:50px;
            margin:10px 0 0 10px;
            border-bottom:2px solid grey;
            img{
                width:40px;
                height:40px;
                margin-right:10px;
            }
        }
    }
    div.active{
        transform:scaleX(1);
        opacity:1;
    }
}

`

const UserImg = styled.img`
height:38px;
width:38px;
border-radius:50%;
cursor:pointer;
`

const Login = styled.div`
margin-right:0;
margin-left:auto;
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius:4px;
letter-spacing:1px;
text-transform:uppercase;
background: rgba(0,0,0,.6);
transition: .25s;
cursor: pointer;
&:hover{
    background: #f9f9f9;
    color:#000;
    border-color:transparent;
}
`