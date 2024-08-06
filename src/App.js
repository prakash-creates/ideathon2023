//import './App.css';
import Homepage from './components/Homepage';
import {Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
