import React from 'react'
import './header.css'
import { useState } from 'react'
import logo from '../applelogo.png'


const Header = () => {
  return (
    <header>
      <nav>
        <h1 class="logo">
          <a href="./index.html">
            <img src={logo} alt="" />
          </a>
        </h1>

        <h2 class="visually-hidden">메뉴</h2>
        <ul class="gnb-list">
          <li class="gnb-item">
            <a href="./menu1.html">menu1</a>
          </li>
          <li class="gnb-item">
            <a href="./menu2.html">menu2</a>
          </li>
          <li class="gnb-item">
            <a href="./menu3.html">menu3</a>
          </li>
        </ul>
      </nav>
    </header>
  )                                                
}

export default Header