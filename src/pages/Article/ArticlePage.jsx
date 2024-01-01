import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Articles from '../home/container/Articles'

function ArticlePage() {
  return (
    <>
      <Header/>
      {/* <Articles article="article"/> */}
      <Articles />
      <Footer/>
    </>
  )
}

export default ArticlePage
