import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
