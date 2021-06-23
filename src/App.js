import './App.scss'
import React, { useState } from 'react'
import { closeMedia } from './components/closeMedia/closeMedia'
import { getContent } from './components/getContent/getContent'
import { openMedia } from './components/openMedia/openMedia'
import { toggleOverlay } from './components/toggleOverlay/toggleOverlay'

const API = () => {
  return (
    <div className="API">
      <div className="container"></div>
      <div className="artist"></div>
      <input autoFocus id="search" placeHolder="Artist..." type="text" />
      <div className="overlay"></div>
      <div className="media hidden"></div>
    </div>
  )
}

export default API
