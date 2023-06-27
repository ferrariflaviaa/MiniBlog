import styled from 'styled-components'

export const CustomFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #2A3647;
  width: 100%;
  height: 180px;
  
  h1{
    font-weight: 300;
    font-size: 1.2rem;
  }

  img {
    padding: 0.5rem 0.2rem;
  }

  @media (max-width: 720px) {
      h1{
        font-size: 1rem;
      }
      p{
        font-size: 0.6rem;
      }
      padding: 0;
      margin: 0;
    }
    @media (max-width: 490px) {
      font-size: 0.4rem;
    }



`

