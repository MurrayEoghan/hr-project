import {Routes, Route} from 'react-router-dom'
import IndexPage from './Components/IndexPage/IndexPage';
import Navigation from './Components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
