import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { CardsDetails } from './components/CardsDetails';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Header/>
         <Routes>
          <Route path = "/" element = {<Cards/>}/>
          <Route path = "/cart/:id" element = {<CardsDetails/>}/>
         </Routes>
         </BrowserRouter>
        
    </div>
  );
}

export default App;
