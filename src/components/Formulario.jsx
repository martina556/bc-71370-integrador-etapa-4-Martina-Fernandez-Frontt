import { useContext, useState, useEffect } from "react"
import ProductosContext from "../context/ProductosContext"
import './Formulario.scss'

const Formulario = () => {

const formInit={
  id: null,
  name: '',
  precio: '',
  stock:'',
  marca:'',
  category:'',
  description:'',
  foto:'',
  envio: false,

}
const  [form, setForm] = useState(formInit)

const {crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar} = useContext(ProductosContext)
 
useEffect(() => {
  productoAEditar ? setForm(productoAEditar) : setForm(formInit)
}, [productoAEditar])
 



const handleSubmit = async e => {
  e.preventDefault()
console.log('handleSubmit')

try{
  if (form.id === null)
{
  console.log('Creando un producto')
  await crearProductoContext(form)
}else{
  console.log('Actualizando producto')
  await actualizarProductoContext(form)
}
handleReset()
}catch (error){
 console.error('[handleSubmit]', error)
}
}

const handleChange =e =>{

const { type, name, checked, value} = e.target

setForm({
  ...form,
  [name]: type == 'checkbox' ? checked : value
})
}

const handleReset =() =>{
console.log('handleReset')
setForm(formInit)
setProductoAEditar(null)
}



  return (
    <>
    <h3>Agregar / editar</h3>
    <form onSubmit={handleSubmit} className="form-content">
      <div className="form-content_input">
        <label htmlFor="lbl-nombre" >Nombre</label>
        <input 
        type="text" 
        name="name" 
        id="lbl-name" 
        value={form.name}  
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-precio">Precio</label>
        <input 
        type="text" 
        name="precio" 
        id="lbl-precio" 
        value={form.precio} 
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-stock">Stock</label>
        <input 
        type="text" 
        name="stock" 
        id="lbl-stock" 
        value={form.stock} 
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-marca">Marca</label>
        <input 
        type="text" 
        name="marca" 
        id="lbl-marca" 
        value={form.marca} 
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-categoria">Categoria</label>
        <input 
        type="text" 
        name="category" 
        id="lbl-category" 
        value={form.category} 
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-detalles">Detalles</label>
        <input 
        type="text" 
        name="description" 
        id="lbl-description" 
        value={form.description} 
        onChange={handleChange}/>
      </div>
      <div className="form-content_input">
        <label htmlFor="lbl-foto">Foto</label>
        <input 
        type="text" 
        name="foto" 
        id="lbl-foto" 
        value={form.foto} 
        onChange={handleChange}/>
      </div>
      <div >
        <label htmlFor="lbl-envio">Envio</label>
        <input 
        type="checkbox"
         name="envio"
         id="lbl-envio"
         checked={form.envio}
         onChange={handleChange}/>
      </div>
      <button type="submit" className="form-content_button">Guardar</button>
      <button type="reset" className="form-content_button" onClick={handleReset}>Limpiar</button>
    </form>
    </>
  )
}

export default Formulario