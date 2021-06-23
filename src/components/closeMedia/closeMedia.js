import React from 'react'
import { getContent } from '../getContent/getContent'

export const closeMedia = () => {
  media.innerHTML = ''
  toggleOverlay()
  media.classList.add('hidden')
}
