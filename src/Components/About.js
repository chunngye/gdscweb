import React from 'react';
import {Link} from 'react-router-dom'
import './About.css'

function About(){
  return(
          <div className="About">
          <h3>React로 블로그 만들기</h3>
          <Link to="about"></Link>
          </div>
      );
    }

  
export default About;