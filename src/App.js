import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Login from './pages/Login';
import { Routes, Route} from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <>
    <div className='bg-gray-50 dark:bg-gray-900' style={{height:"100vh"}}>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/admin.js' element={<Auth Component={()=><Admin myprop="Admin"/>} />} />
      <Route exact path='/customer.js' element={<Auth Component={()=><Customer myprop="Customer"/>} />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
