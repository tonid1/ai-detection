import './App.css';
import Detect from './components/detect';
import Header from './components/header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recognise from './components/recognise';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/detect' element={<Detect />} />
          <Route path='/recognise' element={<Recognise />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
