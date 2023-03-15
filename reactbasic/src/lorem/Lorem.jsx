import React from 'react'
import {useState} from 'react';
import './Lorem.css'
import backImage from './loremback.jpeg'




function lorem() {
  const postCard = [
    <h2>Lorem ipsum dolor sit.</h2>,
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla
    unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.</p>
  ]

  return (
    <div className='lorem-page'>

      <div className='nav'>
        <img src="applelogo.png" alt="" />
        <ul class="gnb-list">
          <li class="gnb-item"><a>menu1</a></li>

          <li class="gnb-item"><a>menu2</a></li>

          <li class="gnb-item"><a>menu3</a></li>

        </ul>

      </div>

      <div className='back'>
        <section style={{ backgroundImage: `url(${backImage})`,height: '500px', backgroundRepeat: 'no-repeat'}}>
          <div className='front-txt'>
            <h2 className='front-title'>Lorem ipsum dolor sit </h2>
            <p className='front-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil ullam voluptatum unde accusamus consequuntur consectetur distinctio earum, voluptatem mollitia facere in sequi deserunt cupiditate sit cumque nesciunt error delectus.</p>
            <button className='front-btn'>버튼</button>
            </div> 
        </section>

        <section>
          <div className='second-text'>
          <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla
              unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
            </p>
          </div>
        </section>

        <section className="post-box">
          <div className="post-card">
          <p className="post-card-txt"></p>
           <ul>
            {postCard.map((post)=> post)}
           </ul>
          </div>
        </section>
       
      </div>

    </div>

    
    )
}




export default lorem

