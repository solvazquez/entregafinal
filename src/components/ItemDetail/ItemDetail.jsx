import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  //1) Creamos un estado con la cantidad de productos agregados: 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const {agregarProducto} = useContext(CarritoContext);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = {id, nombre, precio}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>${precio} </h3>
      <h3 className='texto' >ISBN: {id} </h3>
      
      <img src={img} alt={nombre} />

      <p className='sinopsis' >Sinopsis</p>
      <p className='textoSinopsis' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
      {
        agregarCantidad > 0 ? (<Link className='miBtn2' to="/cart"> Ver mi carrito </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail