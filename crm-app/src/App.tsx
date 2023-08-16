import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Dashboard from './pages/1.dashboard/Dashboard';
import Customers from './pages/2.customers/Customers';
import Items from './pages/3.Items/Items';
import Estimates from './pages/4.Estimates/Estimates';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/items' element={<Items />} />
          <Route path='/estimates' element={<Estimates />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
