import { Link } from "react-router-dom";
import React from 'react'
import { CustomPostDetaliContainer } from "./styles";

export const PostDetail = ({ post }) => {
  return (
    <CustomPostDetaliContainer>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className='createdby'>por: {post.createdBy}</p>
      <div className='tags'>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btnPostDetali">
        Ler
      </Link>
    </CustomPostDetaliContainer>
  );
}
