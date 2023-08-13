import React from 'react'

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { CustomDashboard } from './styles';

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <CustomDashboard>
      <h1>Dashboard</h1>
      <p>Gerencie sua publicações</p>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="post_header">
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}
      {posts && posts.map((post) => (
        <div className="post_row" key={post.id}>
          <p>{post.title}</p>
          <div className="actions">
            <Link to={`/posts/${post.id}`} className='btnDashboard'>
              Ver
            </Link>
            <Link to={`/posts/edit/${post.id}`} className='btnDashboard'>
              Editar
            </Link>
            <Link onClick={() => deleteDocument(post.id)} className='btnDashboard'>
              Excluir
            </Link>
          </div>
        </div>
      ))}
    </CustomDashboard>
  )
}
