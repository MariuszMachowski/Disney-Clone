import React from 'react';
import styled from 'styled-components';
const Login = () => {
    return (
        <Container>
            <Wrap>
                <LogosOne>
                    <img src="/images/cta-logo-one.svg" alt="logos" />
                </LogosOne>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Raya And The Last Dragon is available on Disney+ Premier Access. To get Premier Access, you need to already have a subscription to Disney+, which you can get directly from Disney for $8 per month or $80 per year.
                </Description>
                <LogosTwo>
                    <img src="/images/cta-logo-two.png" alt="logos" />
                </LogosTwo>
            </Wrap>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display:flex;
    align-items:top;
    justify-content:center;
position: relative;
height:calc(100vh - 70px);
&:before{
    position:absolute;
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: url('/images/login-background.jpg');
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    z-index:-1;
    opacity:0.7;
}
`

const Wrap = styled.div`
display: flex;
flex-direction:column;
margin-top:15vh;
width:70%;
max-width:700px;
height:50vh;
`
const LogosOne = styled.div`
height:150px;
width:100%;
margin-bottom:10px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`
const SignUp = styled.button`
padding:17px 0;
margin-bottom:14px;
background:#0063e5;
border-radius:4px;
border:none;
color:#f9f9f9;
font-weight:bold;
font-size:15px;
cursor:pointer;
letter-spacing:1px;
transition: .2s;
&:hover{
    background: #0483ee;
}
`
const Description = styled.p`
text-align:center;
font-size:11px;
line-height:1.5;
letter-spacing:1px;
`

const LogosTwo = styled(LogosOne)`

`