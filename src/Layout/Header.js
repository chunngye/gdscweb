import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <Container>
            <Element>
                <ShortCut><Link to="/login">로그인/회원가입</Link></ShortCut>
                <Search><h1>React Blog</h1></Search>
            </Element>
        </Container>
      );
    }
  }
  
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #e9ecef;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 40px;
    text-align: right;
    margin:0;
    padding:0;
    background-color: #6c757d;
`

const Search = styled.div`
    order: 3;
    width: 100%;
    background-color: #dee2e6;
    text-align: center;
`