import React from 'react'
import Table from 'react-bootstrap/Table'
const Listado = ({ colaboradores, valorBuscador }) => {
  const filteredColaboradores = colaboradores.filter(colaborador =>
    colaborador.nombre.toLowerCase().includes(valorBuscador.toLowerCase())
  )
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {filteredColaboradores.map(colaborador => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Listado
