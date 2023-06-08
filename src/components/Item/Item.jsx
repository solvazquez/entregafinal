import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='nombreProducto' >{nombre} </h3>
        <p className='texto' > ${precio} </p>
        <p className='texto' >ISBN: {id} </p>
       
        {/* En vez de ID puse "ISBN" pues es un identificador único para libros,
        y me pareció que iba perfecto con la temática de mi web.​ */}

        <Link className='btnProducto' to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item