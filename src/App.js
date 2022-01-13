import './App.css';
import { Routes,Route } from 'react-router';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage'
import Services from './pages/Services'
import Header from './components/Header';
// import { AnimatePresence } from 'framer-motion';
function App() {
  return (
   <>
   <Header/>
   <Routes>
    {/* <AnimatePresence> */}
     <Route path ='/' element={<Home/>}/>
     <Route path ='/about' element={<AboutPage/>}/>
     <Route path='/services' element ={<Services/>}></Route>
    {/* </AnimatePresence> */}
   </Routes>
    </>
  );
}

export default App;
