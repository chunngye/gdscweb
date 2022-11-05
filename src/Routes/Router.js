import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Home, About, Login, Board, MyBoard, MyPage } from './index';

const Router = () => (
    <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/myboard" component={MyBoard} />
        <Route path="/mypage" component={MyPage} />
    </Routes>
);


export default Router;