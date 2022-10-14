import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import About from './Components/About';
import Board from './Components/Board';
import Home from './Components/Home';
import{Route, Routes} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/board" element={<Board/>} />
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