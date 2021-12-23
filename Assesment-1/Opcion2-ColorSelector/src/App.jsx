import { useState } from 'react'
import './App.scss'
import Cuadro from './components/Cuadro/Cuadro'
import ColorSelector from './components/ColorSelector/ColorSelector'

const App = () => {
  const elemento = new Array(100)
  for (let i = 0; i < elemento.length; i++) {
    elemento[i] = i
  }
 
  const [userColor, setUserColor] = useState('#ff0000')
  const changeColor = (color) => {
    setUserColor(color)
  }

  return (
    <div>
      <div className="grid-container">
        {elemento.map((currElement) => (
          <Cuadro key={currElement} valor={currElement} color={userColor} />
        ))}
      </div>
      <ColorSelector color={userColor} changeColor={changeColor}  />
    </div>
  )
}

export default App
