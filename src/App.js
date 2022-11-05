import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import About from './Components/About';
import Board from './Components/Board';
import Home from './Components/Home';
import MyBoard from './Components/MyBoard';
import MyPage from './Components/MyBoard';
import{Route, Routes} from 'react-router-dom';
import Router from './Routes/Router';


class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/myboard" element={<MyBoard/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </Layout>
    );
  }
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;