import React, { useState, useEffect, Component } from 'react';
import { getProductoras, crearProductora, actualizarProductora } from '../../service/productoraService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const ProductoraView = () => {

const [valoresForm, setValoresForm] = useState([]);
const [productoras, setProductora] = useState([]);
const { nombre =  '',estado =  '',slogan =  '', descripcion = '' } = valoresForm;
const [productoraSeleccionado, setProductoraSeleccionado] = useState(null);

const listarProductora = async () => {
  try {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Cargando...'
      });
    Swal.showLoading();
    const resp = await getProductoras();
    setProductora(resp.data);
    Swal.close();
  } catch (error) {
    console.log(error);
    Swal.close();
  }
}

useEffect(() => {
  listarProductora();
}, []);

const handleOnChange = (e) => {
  setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
}


const handleCrearProductora = async (e) => {
  e.preventDefault();
  try {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Cargando...'
    });
    Swal.showLoading();

    if (productoraSeleccionado) {
      await actualizarProductora(valoresForm, productoraSeleccionado);
      setProductoraSeleccionado(null);
    } else {
      await crearProductora(valoresForm);
    }
    
    setValoresForm({ nombre: '', estado: '' });
    listarProductora();
    Swal.close();
  } catch (error) {
    console.log(error);
    Swal.close();
  }
};

const handleActualizarProductora = async (e, productora) => {
  e.preventDefault();
  setValoresForm({ nombre: productora.nombre, slogan: productora.slogan, descripcion: productora.descripcion,  estado: productora.estado });
  setProductoraSeleccionado(productora._id); 
};

  return (
    <div className='container-fluid mt-4'>
      <form onSubmit={(e) => handleCrearProductora(e)} >
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input required name='nombre' value={nombre} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">slogan</label>
              <input required slogan='nombre' value={slogan} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">descripcion</label>
              <input required name='descripcion' value={descripcion} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
            
            
          
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select required name='estado' value={estado} className="form-select" 
              onChange={(e) => handleOnChange(e)} >
                <option selected>--SELECCIONE--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mb-3">Guardar</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">slogan</th>
            <th scope="col">descripcion</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
          </tr>
        </thead>
        <tbody>
          {
            productoras.length > 0 && productoras.map((productora, index) => {
              return <tr>
                <th scope='row'> {index + 1}</th>
                <td>{productora.nombre}</td>
                <td>{productora.estado}</td>
                <td>{productora.slogan}</td>
                <td>{productora.descripcion}</td>
                <td>{moment(productora.fecha_creacion).format('DD-MM-YYYY HH:mm')}</td>
                <td>{moment(productora.Fecha_actualizacion).format('DD-MM-YYYY HH:mm')}</td>
                <td><button className='btn btn-success btn-sm me-2' onClick={(e) => handleActualizarProductora(e, productora)}>Actualizar</button>
                  <button className='btn btn-danger btn-sm'>Eliminar</button>
                </td>
                
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

