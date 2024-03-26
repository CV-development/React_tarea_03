import { useState } from 'react'

const Formulario = ({ onAgregarColaborador, obtenerAlert }) => {
  // Estados de los inputs
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')
  // Función para ID única
  const uniqueID = () => {
    const fechaActual = new Date()
    return fechaActual.getTime().toString()
  }
  // Función para agregar nuevo colaborador
  const agregarColab = (e) => {
    e.preventDefault()
    if (nombre === '' || email === '' || edad === '' || cargo === '' || telefono === '') {
      obtenerAlert({
        error: true,
        msg: 'Completa todos los campos',
        color: 'bg-danger'
      })
      return
    }
    const nuevoColaborador = { id: uniqueID(), nombre, correo: email, edad, cargo, telefono }
    onAgregarColaborador(nuevoColaborador)
    obtenerAlert({ error: false, msg: 'Colaborador agregado', color: 'bg-success' })
    setNombre('')
    setEmail('')
    setEdad('')
    setCargo('')
    setTelefono('')
  }
  return (
    <form className='formulario' onSubmit={agregarColab}>
      <div className='form-group mb-2'>
        {/* Campo de nombre de colaborador */}
        <input
          type='text'
          name='nombre'
          className='form-control'
          placeholder='Nombre del colaborador'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        {/* Campo de email de colaborador */}
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Email del colaborador'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* Campo de nombre de colaborador */}
        <input
          type='text'
          name='edad'
          className='form-control'
          placeholder='Edad del colaborador'
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        {/* Campo de nombre de colaborador */}
        <input
          type='text'
          name='cargo'
          className='form-control'
          placeholder='Cargo del colaborador'
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
        {/* Campo de nombre de colaborador */}
        <input
          type='tel'
          name='telefono'
          className='form-control'
          placeholder='Teléfono del colaborador'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
      </div>
      <div className='d-grid gap-1'>
        <button className='btn btn-success' type='submit'>
          Agregar colaborador
        </button>
      </div>
    </form>
  )
}

export default Formulario
