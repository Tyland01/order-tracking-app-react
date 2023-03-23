import logo from './logo.svg';
import './App.css';
import { Hashrouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>RED Take Home Test</h1>
      <HashRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </HashRouterr>
    </div>
  );
}

export default App;
