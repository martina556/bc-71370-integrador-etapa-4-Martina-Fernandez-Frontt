import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
    <main className="carrito-content">
       <h1>Carrito</h1>
    
      <ListadoCarrito/>
      
    </main>
     
    </>
  )
}

export default Carrito