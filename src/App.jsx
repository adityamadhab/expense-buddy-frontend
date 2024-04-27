import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { IndexPage } from './pages/IndexPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import axios from 'axios';
import { SupportPage } from './pages/SupportPage';

axios.defaults.baseURL = "http://localhost:3000/api/v1";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
      </Route> 
    </Routes>
  )
}

export default App;
