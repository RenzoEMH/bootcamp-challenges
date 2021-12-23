
import './_ColorSelector.scss'

const ColorSelector = ({ color, changeColor }) => {

  const classActiveRojo = color==='#ff0000' ? "colorBox colorBox--redActive" : "colorBox colorBox--red"
  const classActiveNegro = color==='#857878' ? "colorBox colorBox--blackActive" : "colorBox colorBox--black"
  const classActiveVerde = color==='#00ff72' ? "colorBox colorBox--greenActive" : "colorBox colorBox--green"
  const classActiveAzul = color==='#1513a0' ? "colorBox colorBox--blueActive" : "colorBox colorBox--blue"

  const Limpiar = () =>{
    window.location.reload(false);
  }

  return (
    <div className="descripcion">
      Select a color and click on any cell of the grid:
      <div className="color__selector">
        <input
          value={color}
          type="color"
          onChange={(e) => {
            changeColor(e.target.value)
          }}
        />

        <div
          className={classActiveRojo}
          onClick={() => changeColor('#ff0000')}
        ></div>
        <div
          className={classActiveNegro}
          onClick={() => changeColor('#857878')}
        ></div>
        <div
          className={classActiveVerde}
          onClick={() => changeColor('#00ff72')}
        ></div>
        <div
          className={classActiveAzul}
          onClick={() => changeColor('#1513a0')}
        ></div>

        <input
          value={color}
          type="text"
          onChange={(e) => {
            changeColor(e.target.value)
          }}
        />
        <button className="btnLimpiar" onClick={Limpiar}>Limpiar</button>
      </div>
    </div>
  )
}

export default ColorSelector
