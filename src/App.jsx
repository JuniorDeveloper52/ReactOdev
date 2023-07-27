import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Kayit from './components/kayit';
import Kayit2 from './components/kayit2';
import Kayit3 from './components/kayit3';
import LoginPage from './components/loginpage';
import Footer from './components/footer';
import Imgwidth from "../src/components/imgwidth"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Imgwidth/>} />
        <Route path="/kayit"   element={<Kayit/>}/>
        <Route path="/giris"   element={<LoginPage/>}/>
        <Route path="/kayit2"   element={<Kayit2/>}/>
        <Route path="/kayit3"   element={<Kayit3/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
