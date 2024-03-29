import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>

        {gastos.map(gasto =>(
            <Gasto 
                key={gasto.id}
                gasto = {gasto}
            />
        ))}

    </div>
  )
}

export default ListadoGastos
