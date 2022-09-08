import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage';
import "antd/lib/select/style/index.css";
import MovieDetails from './pages/Details/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path="/movieonline" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
