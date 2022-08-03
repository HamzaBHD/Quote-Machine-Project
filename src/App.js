import React , { useState, useEffect } from 'react';
import Quotes from './Components/Quotes'
import axios from 'axios';

function App() {
  const [data , setData] =  useState([])
  const [start, setStart] = useState(false)
  const [color, setColor] = useState('#3d9970')
  const [quote, setQuote] = useState({
    text: '',
    author: '-'
  })

  const newColor = {backgroundColor: color, color: color}
  const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
                  '#e74c3c', '#9b59b6', '#FB6964', '#342224',
                  "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
    .then(response => {
      setData(response.data);
    })
  },[])

  function handleStart (){
    setStart(prevStart => !prevStart)
  }

  function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomQuote = data[randomIndex]
    setQuote(prevQuote => ({
      ...prevQuote,
      text: randomQuote.text,
      author: randomQuote.author 
    }))
    const randomColor = Math.floor(Math.random() * colors.length)
    const newColor = colors[randomColor]
    setColor(newColor)
  }

  return (
        <Quotes 
          style={newColor}
          quote={quote.text}
          author={quote.author}
          handleClick={getNewQuote}
        />
  )
}
export default App;
