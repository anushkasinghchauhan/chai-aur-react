import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai'




function MyApp() {
    return (
        <div>
            <h1> Custom App ! Chai</h1>
        </div>
    )
}

const AnotherElement = (
    <a href = "https://google.com" target = "_blank">visit google</a>
)

// const reactElement = React.createElement(
//     'a',
//     { href: 'https://google.com', target: '_blank' },
//     'click me to visit google'
// )


createRoot(document.getElementById('root')).render(

<App />
  
)
