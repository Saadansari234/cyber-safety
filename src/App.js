
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CreateNamePage from './pages/CreateNamePage';
import MenuPage from './pages/MenuPage';
import IntoVideo from './pages/IntoVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createname' element={<CreateNamePage />} />
        <Route path='/menupage' element={<MenuPage />} />
        <Route path='/introvideo' element={<IntoVideo />} />
      </Routes>
    </BrowserRouter>
    // <CreateNamePage/>
  );
}

export default App;
