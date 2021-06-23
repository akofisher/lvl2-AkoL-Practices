import React from 'react'
import { getContent } from '../getContent/getContent'

export const toggleOverlay = () => {
  document
    .querySelectorAll('.result')
    .forEach((e) => e.classList.toggle('blur'))
  overlay.classList.toggle('blur')
}

overlay.addEventListener('click', closeMedia)
searchElem.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toggleOverlay()
    getContent(event.target.value)
    searchElem.blur()
  }
})

searchElem.addEventListener('focus', toggleOverlay)
