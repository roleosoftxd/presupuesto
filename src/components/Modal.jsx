import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, SetMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);

    }

    const handleSubmit = e =>{
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')){
            SetMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                SetMensaje('')
            }, 3000);

            return
        }

        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={CerrarBtn}
                alt='Cerrar modal'
                onClick={ocultarModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : 'cerrar' }`}>
            <legend>Nuevo gasto</legend>

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input 
                    type='text'
                    placeholder='Añade nombre del gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input 
                    type='number'
                    placeholder='Añade cantidad del gasto'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select
                    id='categoria'
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}
                    >
                    <option value=''>-- Seleccione</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value='casa'>Casa</option>
                    <option value='comida'>Comida</option>
                    <option value='gastos'>Gastos varios</option>
                    <option value='ocio'>Ocio</option>
                    <option value='salud'>Salud</option>
                    <option value='suscripcion'>Suscripciones</option>
                    


                </select>
            </div>

            <input
                type='submit'
                value='Añadir gasto'
                
            />

        </form>

    </div>
  )
}

export default Modal
