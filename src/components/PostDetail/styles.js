import { styled } from "styled-components";

export const CustomPostDetaliContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 6px;
  }

  h2 {
    margin: 10px 0;
  }

  .tags {
    margin: 0;
  }

  .tags span {
    font-weight: bold;
  }

  .createdby {
    font-style: italic;
    color: #444;
    font-size: 0.8em;
    margin: 0;
  }

  .btnPostDetali {
    background-color: transparent;
    text-align: center;
    border-radius: 0;
    color: #000;
    border: 1px solid #000;
    padding: 7px 30px;
    border-radius: 6px;

    &:hover{
      background-color: #014;
      color: #fff;
    }
  }

  @media (max-width: 490px) {
    img {
    max-width: 350px;
    border-radius: 6px;
  }

  h2 {
    margin: 10px 0;
  }

  }

`
