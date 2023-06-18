import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from './hooks/useAuthentication'

import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { CreatePost } from './pages/CreatePost'
import { Dashboard } from './pages/Dashboard'
import { Register } from './pages/Register'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication();
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }
  return (
    <div className='App'>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
