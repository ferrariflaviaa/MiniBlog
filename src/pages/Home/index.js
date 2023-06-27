import React, { useState } from 'react'
import { PostDetail } from './../../components/PostDetail'
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { CustomHomeContainer } from './styles';

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
    <CustomHomeContainer>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className='search_form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div className='post-list'>
        {loading && <p>Carragamento...</p>}
        {posts && posts.length === 0 && (
          <div className='noposts'>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}

        {posts &&
          posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}

      </div>
    </CustomHomeContainer>
  )
}

