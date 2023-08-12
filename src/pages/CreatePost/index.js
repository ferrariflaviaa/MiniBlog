import React from 'react'
import {CustomCreatePost} from './styles'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

export const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <CustomCreatePost>
      <h2>
        Formulário de Publicação
      </h2>
      <p>Liberte sua criatividade e compartilhe seus pensamentos no nosso formulário de criação de postagens.
        <br />Deixe sua voz ser ouvida enquanto você escreve sobre seus tópicos favoritos e compartilha seu conhecimento com nossa comunidade online</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name='text' required placeholder='Pense num bom título...' onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          <span>URL de imagem:</span>
          <input type="text" name='image' required placeholder='Insira uma imagem que representa seu post' onChange={(e) => setImage(e.target.value)} value={image} />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea name='body' required placeholder='Insira o conteúdo do post' onChange={(e) => setBody(e.target.value)} value={body} />
        </label>
        <label>
          <span>Tags:</span>
          <input type='text' name='tags' required placeholder='Insira as tags separadas por vírgula' onChange={(e) => setTags(e.target.value)} value={tags} />
        </label>
        {!response.loading && <button className="btnCreatePost">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </CustomCreatePost>
  )
}
