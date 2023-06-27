import styled from 'styled-components'

export const CustomNavBarContainer = styled.nav`
display: flex;
box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
background-color: #2A3647;
color: #fff;
justify-content: space-between;
align-items: center;
padding: 0.5rem 2rem;

.brand{
  font-size:1.2em;
  @media (max-width: 720px) {
      text-align: center;
      font-size: 1rem;
      padding: 0;
      margin: 0;
    }
    @media (max-width: 490px) {
      font-size: 0.5rem;
    }
}

.brand span{
  font-weight: 900;
  text-transform: upppercase;
}

.links_list{
  display: flex;
  list-style: none;

  @media (max-width: 720px) {
      text-align: center;
      font-size: 0.5rem;
      padding: 0;
      margin: 0;
    }
    @media (max-width: 490px) {
      font-size: 0.4rem;
    }

}

.links_list li{
  margin-right: 1em;

}

.links_list li a {
  padding: 0.4em 0.6em;
}

a{
  color: #fff;
}

.active{
  background-color: #000;
  color:#fff;
  border-radius: 6px;
}
`

