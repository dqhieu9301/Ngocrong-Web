import './App.scss';
import Alert from '../components/alert';
import Header from '../components/header';
import Homepage from '../components/homepage';
import Endofweb from '../components/endOFweb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Review from '../components/review';
function App() {
  return (
    <BrowserRouter>
      <div className='body_body'>
        <Alert />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Endofweb />
      </div>
    </BrowserRouter>
  );
}

export default App;
