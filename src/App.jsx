import {Routes, Route} from 'react-router-dom'
import IndexPage from './Components/IndexPage/IndexPage';
import Navigation from './Components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <>
      <Navigation />
      <body className='main-app-body'>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
