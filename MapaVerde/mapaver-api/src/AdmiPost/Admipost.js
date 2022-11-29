import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const dataPaises = [
    { id: 1, nombre: "Filipinas", descripcion: 241 },
    { id: 2, nombre: "Brasil", descripcion: 225 },
    { id: 3, nombre: "Colombia", descripcion: 216 },
    { id: 4, nombre: "Nigeria", descripcion: 216 },
    { id: 5, nombre: "Argentina", descripcion: 207 },
    { id: 6, nombre: "Indonesia", descripcion: 195 },
    { id: 7, nombre: "Emiratos Árabes Unidos", descripcion: 191 },
    { id: 8, nombre: "México", descripcion: 190 },
    { id: 9, nombre: "Sudáfrica", descripcion: 190 },
    { id: 10, nombre: "Egipto", descripcion: 186 },
  ];

  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [elementoSeleccionado, setElementoSeleccionado] = useState({
    id: '',
    nombre: '',
    descripcion: ''
  });

  const seleccionarPais=(elemento, caso)=>{
setElementoSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setElementoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(post=>{
      if(post.id===elementoSeleccionado.id){
        post.descripcion=elementoSeleccionado.descripcion;
        post.nombre=elementoSeleccionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(post=>post.id!==elementoSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setElementoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=elementoSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <br />
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Información</th>
            <th>Imagenes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td id='info'>{elemento.descripcion}</td>
              <td>{elemento.imagen}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Post</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={elementoSeleccionado && elementoSeleccionado.id}
            />
            <br />

            <label>Titulo</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={elementoSeleccionado && elementoSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={elementoSeleccionado && elementoSeleccionado.descripcion}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar este post? {elementoSeleccionado && elementoSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Post</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Titulo</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={elementoSeleccionado ? elementoSeleccionado.nombre: ''}
              onChange={handleChange}
            />
            <br />

            <label>Información</label>
            <input
              className="form-control"
              type="text"
              name="Informacion"
              value={elementoSeleccionado ? elementoSeleccionado.descripcion: ''}
              onChange={handleChange}
            />

            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="Imagen"
              value={elementoSeleccionado ? elementoSeleccionado.imagen: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
