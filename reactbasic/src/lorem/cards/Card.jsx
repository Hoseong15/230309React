import React from 'react'
import './card.css'

const Cards = () => {
  const data = [
    { title : '인호성', content : '리액트 어려워요'},
    { title : '여상현', content : '리액트 너무 싫어요'},
    { title : '김상현', content : '리액트 쉽네'}
  ]
  
  return (
    <section className='post-box'>
      {data.map((kkk, i) => (
      <Card title={kkk.title} content={kkk.content} key={i} />
      ))}

      {/* {comments.map((comment, i) => {
        return(
        <Card title={comment.title} content={comment.content} key={i}/>
        )
      })} */}

    </section>
  )
}

function Card(props) {
  return (
    <div className='post-card'>
      <h2>{props.title}</h2>
      <p className='post-card-txt'>{props.content}</p>
    </div>
  )
}


export default Cards