import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import { CustomNavBarContainer } from './styles';

export const NavBar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  return (
    <CustomNavBarContainer>
      <NavLink to='/' className="brand">
        Mini <span>Blog</span>
      </NavLink>
      <ul className="links_list">
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? "active" : "")}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li onClick={logout}>Sair</li>
        )}
      </ul>
    </CustomNavBarContainer>
  )
}
