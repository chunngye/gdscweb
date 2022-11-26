import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from './Components/ListBoardComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateBoardComponent from './Components/CreateBoardComponent';
import ReadBoardComponent from './Components/ReadBoardComponent';



function App() {
  return (
    <div>
            <Router>
             <Routes>
              <Route path = "/" exact element = {<ListBoardComponent />}></Route>
              <Route path = "/board" element = {<ListBoardComponent />}></Route>
              <Route path = "/create-board/:no" element = {<CreateBoardComponent />}></Route>
              <Route path = "/read-board/:no" element = {<ReadBoardComponent />}></Route>
             </Routes>
            </Router>
    </div>
  );
}

export default App;