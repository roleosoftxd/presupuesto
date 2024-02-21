import {useState} from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) =>{
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) <0 ) {
      setMensaje('No es un presupuesto valido')
      }else {
        setMensaje('Si es un numero')
      }
    
  }
  
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Añade tu prespuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
                />           
            </div>
            <input type='submit' value='Añadir'/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto