import React, { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Listado from './components/Listado'
import { BaseColaboradores } from './components/BaseColaboradores'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  const [listaColab, setListaColab] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ error: '', msg: '', color: '' })
  const [valorBuscador, setValorBuscador] = useState('')
  const agregarNuevoColaborador = (nuevoColaborador) => {
    setListaColab([...listaColab, nuevoColaborador])
  }
  const handleBuscar = (valor) => {
    setValorBuscador(valor)
  }
  return (
    <Container fluid>
      <Row>
        <h2>Lista de colaboradores</h2>
        <Buscador onBuscar={handleBuscar} />
      </Row>
      <Row>
        <Col>
          <Listado colaboradores={listaColab} valorBuscador={valorBuscador} />
        </Col>
        <Col>
          <h2>Agregar colaborador</h2>
          <Formulario onAgregarColaborador={agregarNuevoColaborador} obtenerAlert={setAlert} />
          <Alert color={alert.color} msg={alert.msg} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
