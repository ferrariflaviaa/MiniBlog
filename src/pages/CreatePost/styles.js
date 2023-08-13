import { styled } from "styled-components";

export const CustomCreatePost = styled.div`
text-align: center;

h2{
  font-size: 2em;
}

p {
  color: #aaa;
  margin-bottom: 2em;
}

input, textarea{
  background-color: #EEEEEE;
  padding: 1rem;
  border-radius: 8px;
}

 .btnCreatePost {
    text-align: center;
    width: 311px;
    height: 60px;
    border: 1px solid #000;
    padding: 6px;
    border-radius: 20px;
    background-color: #014;
    color: #fff;
    
    
    &:hover{
    background-color: transparent;
      color: #000;
    }
  }

`

