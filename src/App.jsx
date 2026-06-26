import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage'
import TrackOrder from './Components/TrackOrder'
import CreateAccount from './Components/CreateAccount';
import SighnIn from './Components/SighnIn';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import ShipmentPage from './Components/ShipmentPage';
import TrackPage from './Components/TrackPage';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
 <Route path='/' element={<LandingPage/>}/>
<Route path='/trackorder' element={<TrackOrder/>}/>
<Route path='/createccount' element={<CreateAccount/>}/>
<Route path='/signin' element={<SighnIn/>}/>

<Route path="/dashboard" element={<Dashboard />}>
<Route index element={<HomePage />} />
  <Route path="home" element={<HomePage />} />
  <Route path="shipment" element={<ShipmentPage />} />
  <Route path="track" element={<TrackPage />} />
</Route>
<Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App