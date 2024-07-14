import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const chai ="hello world"

const createElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click me to visit google',
  chai

)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    createElement
)
