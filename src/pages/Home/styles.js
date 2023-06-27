import { styled } from "styled-components";

export const CustomHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  h1{
    font-weight: 400;
    font-size: 1.8rem;
    align-items: center;

    @media (max-width: 770px) {
      font-size: 1.5rem;
      flex-wrap: wrap;
    }
    @media (max-width: 490px) {
      font-size: 1rem;
    }
  }

  .post-list{
    display: grid;
    width: 960px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    @media (max-width: 1000px) {
      width: 630px;
    }
    @media (max-width: 690px) {
      width: 300px;
    }
  }

  .search_form {
  max-width: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.search_form input {
  margin-right: 10px;
  width: 50%;
}

.noposts {
  text-align: center;
}

.noposts p {
  margin-bottom: 1.5em;
}

.noposts a {
  padding: 10px 25px;
}

`




