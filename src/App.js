
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CreateNamePage from './pages/CreateNamePage';
import MenuPage from './pages/MenuPage';
import IntroVideo from './pages/IntroVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createname' element={<CreateNamePage />} />
        <Route path='/menupage' element={<MenuPage />} />
        <Route path='/introvideo' element={<IntroVideo />} />
        <Route path='/policypage' element={<PolicyPage />} />
      </Routes>
    </BrowserRouter>
    // <CreateNamePage/>
  );
}

export default App;
