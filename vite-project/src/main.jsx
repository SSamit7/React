import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'



// function MyApp(){
//   return (
//     <div>
//       <h1>Love Chai</h1>
//     </div>
    
//   )
// }
  

const anotherUser = "Chai Lover"
const ReactElement = {
    type : 'a',
    props:{
        href: 'https://www.google.com',
        target:"_blank",
    },
    children: 'Go to Google',anotherUser
}
const anotherElement =React.createElement(
  'a',
   {href: 'https://www.google.com', target:"_blank"},
  'Go to Google',anotherElement
  

)

const reactElement =React.createElement(
  'a',
  {href: 'https://www.google.com', target:"_blank"},
  'Go to Google', anotherElement
  

)


createRoot(document.getElementById('root')).render(
  
    reactElement()

)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
