import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Dashboard from './pages/1.dashboard/Dashboard';
import Customers from './pages/1.dashboard/Customers';
//import Items from './pages/1.dashboard/Items';
import Estimates from './pages/1.dashboard/Estimates';
import Login from './pages/0.login/Login';
import SignUp from './pages/0.login/SignUp';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
         {/* <Route path='/items' element={<Items />} /> */}
          <Route path='/estimates' element={<Estimates />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
