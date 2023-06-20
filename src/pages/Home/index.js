import React, { useState } from 'react'
import styles from './styles.module.css'
import {PostDetail} from './../../components/PostDetail'
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

export function Home() {
  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`)
    }


  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div className='post-list'>
        {loading && <p>Carragamento...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}

      </div>
    </div>
  )
}

