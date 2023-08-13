import React from 'react'
import { Link } from 'react-router-dom'
import { Customabout } from './styles'

export function About() {
  return (
    <Customabout>
      <h2>Bem-vindo ao Mini
        <span>Blog</span>
      </h2>
      <p>
        Nosso espaço online foi criado com um objetivo em mente: proporcionar a você a plataforma perfeita para compartilhar suas ideias e informações com o mundo. Acreditamos que cada indivíduo carrega consigo um tesouro de conhecimento único, e é por isso que queremos oferecer um lugar onde você possa expressar suas perspectivas, explorar tópicos de interesse e conectar-se com uma comunidade ávida por aprendizado.
        <br /> <br />
        Seja você um entusiasta apaixonado, um curioso incansável ou alguém com expertise em determinados assuntos, Mini do Blog está aqui para dar vida às suas ideias. Compartilhe insights, narre histórias, ofereça conselhos práticos e inspire outros com suas contribuições. Afinal, o conhecimento ganha valor quando é compartilhado.
        <br /><br />
        Então, embarque conosco nessa jornada de descoberta e colaboração. Seu conhecimento tem o poder de impactar vidas e enriquecer mentes. Estamos animados para ver as ideias brilhantes que você trará para a mesa!
        <br /><br />
        Junte-se a nós no Mini do Blog e faça parte dessa comunidade vibrante de pensadores e criadores. Seu próximo post pode ser o começo de uma jornada emocionante de aprendizado mútuo. Vamos compartilhar e crescer juntos!
      </p>
      <h3>Elabore a sua estreia no mundo das   
        <span> publicações</span>
      </h3>
      <Link to='/posts/create' className='btn'>
      Começar a Criar
      </Link>
    </Customabout>
  )
}

