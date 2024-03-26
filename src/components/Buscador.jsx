import React, { useState } from 'react'

const Buscador = ({ onBuscar }) => {
  const [buscador, setBuscador] = useState('')
  const handleBuscadorChange = (e) => {
    const valor = e.target.value
    setBuscador(valor)
    onBuscar(valor) // Llama a la función onBuscar y pasa el valor del buscador
  }
  return (
    <form className='formulario'>
      <div className='form-group mb-2'>
        {/* Campo de Buscador */}
        <input
          type='text'
          name='buscar'
          className='form-control'
          placeholder='Busca un colaborador'
          onChange={handleBuscadorChange}
          value={buscador}
        />
      </div>
    </form>
  )
}

export default Buscador
