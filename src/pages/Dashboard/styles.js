import { styled } from "styled-components";


export const CustomDashboard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

h2{
  font-size: 2.2em;
  margin-bottom: 0.5em;
}

p{
  color: #aaa;
  margin-bottom: 1em;
}

.noposts {
  text-align: center;

  p {
    margin-bottom: 1.5em;
  }
  
   a {
    padding: 10px 25px;
  }
}

.post_header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  width: 80%;
  padding: 10px;
}

.post_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 80%;
  padding: 10px;

  p {
  color: #000;
  }

  button, a {
  margin: 0 5px;
  height: 30px;
  width: 100px;
  font-size: 0.7em;
  }
}

.btnDashboard {
    text-align: center;
    width: 200px;
    height: 70px;
    font-size: 1rem;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 8px;
    background-color: #014;
    color: #fff;
    cursor: pointer;
    
    
    &:hover{
    background-color: transparent;
      color: #000;
    }
  }

`