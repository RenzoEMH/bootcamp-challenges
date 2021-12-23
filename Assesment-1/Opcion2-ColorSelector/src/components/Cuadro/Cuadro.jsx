import { useState } from 'react'

const Cuadro = ({ valor, color }) => {
  const [bgColor, setBgColor] = useState('black')
  const changeColor = () => {
    setBgColor(color)
  }
  return (
    <div
      className={`grid-item-${valor}`}
      key={valor}
      onClick={changeColor}
      style={{ backgroundColor: bgColor }}
    ></div>
  )
}

export default Cuadro
