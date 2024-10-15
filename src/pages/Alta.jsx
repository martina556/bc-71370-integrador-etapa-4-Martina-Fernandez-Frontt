import useTitulo from "../hooks/useTitulo"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import './Alta.scss'
const Alta = () => {
  useTitulo('Alta')
  return (
    <>
    <main className="main-alta">
      <h1>Formulario de Alta de productos</h1>
    <Formulario/>
    <Tabla/>
    </main>
    
    </>
  )
}

export default Alta