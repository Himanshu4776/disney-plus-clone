import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATACHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGIONAL</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://img.icons8.com/ios/50/000000/user--v3.png"/>
        </Nav>
    )
}
export default Header;
const Nav = styled.div`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
`
const Logo = styled.img`
width: 80px;
padding: 5px;
`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 100px;
a {
    display: flex;
    align-itmes: center;
    padding: 0 12px;
    cursor: pointer;
    img {
        height: 20px;
    }
    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
`
const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
background: white;
cursor: pointer;

`