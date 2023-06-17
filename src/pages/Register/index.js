import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
    const user = {
      displayName, email, password
    }

    if(password !== confirmPassword){
      return setError("As senhas precisam ser iguais")
    }

    console.log(user)
  }

  return (
    <div className={styles.register}>
      <h1>
        Cadastre-se para postar
      </h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='Email do usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='insira sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme sua senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button className='btn'>Cadastar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}