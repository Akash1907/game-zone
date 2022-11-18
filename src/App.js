import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import GamePage from './Pages/GamePage';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Router>
            <Routes>
              <Route path='/' element ={<HomePage />} />
              <Route path="/GamePage" element={<GamePage />}/>
              
              </Routes>
        </Router>
    </div>
  );
}

export default App;
