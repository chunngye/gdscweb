import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return(
        <div className="Home">
          <h3>Home</h3>
          <Link to="/"></Link>
        </div>
      );
    }
  
export default Home;