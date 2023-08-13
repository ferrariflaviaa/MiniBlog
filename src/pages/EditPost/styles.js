import styled from 'styled-components'

export const CustomEditPost = styled.div`
text-align: center;

h2{
  font-size: 2em;
}

p{
  color: #aaa;
  margin-bottom: 2em;
}

input, textarea{
  background-color: #EEEEEE;
  padding: 1rem;
  border-radius: 8px;
}

.preview_title {
  margin-bottom: 0.2em;
  color: #000;
  font-weight: bold;
}

.image_preview {
  max-width: 100%;
  margin-bottom: 1em;
}

.btnEditPost {
    text-align: center;
    width: 311px;
    height: 60px;
    font-size: 1.2rem;
    border: 1px solid #000;
    padding: 6px;
    border-radius: 20px;
    background-color: #014;
    color: #fff;
    cursor: pointer;
    
    
    &:hover{
    background-color: transparent;
      color: #000;
    }
  }
`






