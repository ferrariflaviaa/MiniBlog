import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export const Register = () => {
  return (
    <div className={styles.register}>
      <h1>
        Cadastre-se para postar
      </h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form action="">
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='Email do usuário' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='insira sua senha' />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme sua senha' />
        </label>
        <button className='btn'>Cadastar</button>
      </form>
    </div>
  )
}
