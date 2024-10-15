import './ListadoCarrito.scss'
import { useContext } from 'react'
import ItemCarrito from './ItemCarrito.jsx'
import CarritoContext from '../context/CarritoContext'

const ListadoCarrito = () => {

  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleComprar = () => {
    console.log('Comprando...')
    guardarCarritoContext()
  }

  const handleLimpiarCarrito = () => {
    console.log('Vaciando carrito...')
    limpiarCarritoContext()
  }

  return (
  <>  
    <main className='carrito-content'>

        <table className='tabla-carrito'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrito.length <= 0 ? (
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                        </tr>
                    ) : (
                        carrito.map((producto, idx) => (
                            <ItemCarrito key={idx} producto={producto} />
                        ))
                    )
                }
            </tbody>
        </table>
        <div className='buttons-carrito'>
            { !carrito.length <= 0 && (
                <>
                    <button className='carrito-button' onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className='carrito-button' onClick={handleComprar}>Comprar</button>
                </>
            )
        }
        </div>
        
    
    </main>
    </>
  )
}

export default ListadoCarrito