import React from 'react'

export const getContent = (search) => {
  const container = document.querySelector('.container')
  const artistImage = document.querySelector('.artist')
  const media = document.querySelector('.media')
  const overlay = document.querySelector('.overlay')
  const searchElem = document.querySelector('#search')

  const url = new URL('https://itunes.apple.com/search')
  const params = { term: search, media: 'musicVideo' }
  url.search = new URLSearchParams(params)
  fetch(url, { method: 'POST' })
    .then((results) => results.json())
    .then((data) => {
      results = data.results
      const resultsHTML = results
        .map(
          (result, index) => `
          <div style="background-image: url(${result.artworkUrl100});" onclick="openMedia('${result.previewUrl}', '${result.trackCensoredName}')" class="result"></div>
        `,
        )
        .join('')
      container.innerHTML = resultsHTML
      searchElem.blur()
      return fetch(data.results[0].artistViewUrl)
    })
    .then((data) => data.text())
    .then((data) => {
      const artistImgUrl = data.match(/https?:\/\/[a-zA-Z0-9:\/\.\-]+.jpg/)[0]
      artistImage.style['background-image'] = `url(${artistImgUrl})`
    })
    .catch(() => (container.innerHTML = '<h1>Problem retrieving media...</h1>'))
}
