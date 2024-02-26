import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);

        
        
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

        <form className={`formulario ${animarModal ? "animar" : 'cerrar' }`}>
            <legend>Nuevo gasto</legend>
            
            <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input 
                    type='text'
                    placeholder='Añade nombre del gasto'
                />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input 
                    type='number'
                    placeholder='Añade cantidad del gasto'
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select
                id='categoria'>
                    <option value=''>-- Seleccione</option>
                    <option value=''>Ahorro</option>
                    <option value=''>Comida</option>
                    <option value=''>Gastos varios</option>
                    <option value=''>Ocio</option>

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