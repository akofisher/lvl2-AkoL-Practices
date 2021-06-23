import React from 'react'
import { getContent } from '../getContent/getContent'

export const openMedia = (url, title) => {
  if (!url) return
  media.innerHTML = `<video controls autoplay src="${url}"></video><p>${title}</p>`
  document.querySelectorAll('.result').forEach((e) => e.classList.add('blur'))
  overlay.classList.add('blur')
  media.classList.remove('hidden')
}
