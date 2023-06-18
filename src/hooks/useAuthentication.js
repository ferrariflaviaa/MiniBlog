import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "./../firebase/config";
import { useState, useEffect } from "react";

const auth = firebase.auth();

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // Lógica adicional para lidar com o cancelamento
      // Se necessário
    }
  };

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      return user;

    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }

  };

  const logout = () => {
    checkIfIsCancelled();

    signOut(auth)
  }

  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)

    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado"
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta.'
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde."
      }
      setError(systemErrorMessage)
    }
    setLoading(false)
  }

  
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};
