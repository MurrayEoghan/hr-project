import {Routes, Route} from 'react-router-dom'
import IndexPage from './Components/IndexPage/IndexPage';
import { ConfigProvider } from 'antd';
import Navigation from './Components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <ConfigProvider theme={{
      token: {

      },
      components: {
        Button: {
          defaultBg: '#3ba844'
        }
      }
    }}>
      <Navigation />
      <body className='main-app-body'>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </body>
    </ConfigProvider>
  );
}

export default App;
