import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from './hooks/useAuthentication'

import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Post } from "./pages/Post";
import { EditPost } from "./pages/EditPost";
import { Search } from "./pages/Search";
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

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/' />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />} />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
