import styles from "./styles.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
// import { useQuery } from "../../hooks/useQuery";

import { PostDetail } from "../../components/PostDetail";
import { Link } from "react-router-dom";

import React from 'react'

export const Search = () => {
  const { documents: posts } = useFetchDocuments("posts", "search");
  return (
    <div className={styles.search_container}>
      <h1>Resultados encontrados para: {"search"}</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca</p>
            <Link to="/" className="btn btn-">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}
