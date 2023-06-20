import React from 'react'
import styles from './styles.module.css'

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
// import { useDeleteDocument } from "../../hooks/useDeleteDocument";

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}
      {posts && posts.map((post) => (
        <div className={styles.post_row} key={post.id}>
          <p>{post.title}</p>
          <div className={styles.actions}>
            <Link to={`/posts/${post.id}`} className='btn btn-outline'>
              Ver
            </Link>
            <Link to={`/post/edit/${post.id}`} className='btn btn-outline'>
              Editar
            </Link>
            <button onClick={""} className='btn' btn-outline btn-danger>
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
