import React from 'react';
import {Link} from 'react-router-dom'
import './Board.css'
import {useState} from 'react'

function Board(){
    const [movieContent, setMovieContent]=useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent]=useState([]);

    const getValue=e=>{
        const{name,value}=e.target;
        setMovieContent({
            ...movieContent,
            [name]:value
        })
        console.log(movieContent);
    }
  return(
    <div className='Board'>
        <div className='movie-container'>
            {viewContent.map(element=>
                <div>
                   <h2>{element.title}</h2>
                   <div>
                    {element.content}
                   </div>
                </div>
    )}
    </div>
    <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
        <textarea className="text-area" placeholder='내용' onChange={getValue} name='content'></textarea>
    </div>
    <button className="submit-button"
    onClick={()=>{
        setViewContent(viewContent.concat({...movieContent}));
    }}>입력</button>
    <Link to="board"></Link>
    </div>
      );
    }
  
export default Board;