import { useState } from 'react';
import './App.scss';
import Navigator from './components/Navigator';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth'
import { JwtContext } from './context/jwtContext'
import Login from './pages/Login';
import Home from './pages/Home';
import Games from './pages/Games';
import Other from './pages/Other';
import Register from './pages/Register';
import { SHContextProvider } from './context/context';
import Footer from './components/Footer';
import GamesDetail from './pages/GamesDetail'
import OtherDetails from './pages/OtherDetails'

function App() {
  const [jwt, setJwt] = useState(null);
  return (
    
    <JwtContext.Provider value={{jwt, setJwt}}>
    <SHContextProvider>
      <Router>
        <div class='app'>
        <Navigator></Navigator>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/games' element={<RequireAuth><Games></Games></RequireAuth>}></Route>
          <Route path='/games/:id' element={<RequireAuth><GamesDetail></GamesDetail></RequireAuth>}></Route>
          <Route path='/other' element={<RequireAuth><Other></Other></RequireAuth>}></Route>
          <Route path='/other/:id' element={<RequireAuth><OtherDetails></OtherDetails></RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
        </div>
      </Router>
      </SHContextProvider>
    </JwtContext.Provider>
    
    
  );
}

export default App;
