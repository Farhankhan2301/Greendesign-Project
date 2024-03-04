import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Employees from './Employees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/dashboard' element={<Dashboard/>} exact/>
        <Route path='/employees' element={<Employees/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
