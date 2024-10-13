import React, { useState, useEffect } from 'react';
import { getProductoras } from '../../service/productoraService';
import { getDirectores } from '../../service/directorService';
import { getTipos } from '../../service/tipoService';
import { getGeneros } from '../../service/generoService';
import { crearMedia } from '../../service/mediaService';
import Swal from 'sweetalert2';


export const MediasNew = ({ handleOpenModal, listarMedia }) => {

    const [productoras, setProductoras ] = useState([]);
    const [directores, setDirectores ] = useState([]);
    const [tipos, setTipos ] = useState([]);
    const [generos, setGeneros ] = useState([]);
    const [ valoresForm, setValoresForm ] = useState([]);
    const { serial = '', titulo = '', sipnosis = '', url = '',
        imagen = '', fecha_cracion = '',Fecha_actualizacion = '', Año_estreno  = '', director, genero, productora, tipo } = valoresForm
    
    const listarProductoras = async () => {
        try{
            const { data } = await getProductoras();
            setProductoras(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarProductoras();
    }, []);


    const listarDirectores = async () => {
        try{
            const { data } = await getDirectores();
            setDirectores(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarDirectores();
    }, []);


    const listarTipos = async () => {
        try{
            const { data } = await getTipos();
            setTipos(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);


    const listarGeneros = async () => {
        try{
            const { data } = await getGeneros();
            setGeneros(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarGeneros();
    }, []);

    
    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const media = {
            serial, titulo, sipnosis, url, imagen,
            fecha_cracion, Fecha_actualizacion, Año_estreno,
            director: {
                _id: director
            },
            genero: {
                _id: genero
            },
            tipo:{
                _id: tipo
            },
            productora: {
                _id: productora
            }
        }
        console.log(media);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearMedia(media);
            handleOpenModal();
            listarMedia();
            Swal.close();

        } catch(error) {
            console.log(error);
            Swal.close();
        }
        
    }

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>

                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nueva serie o pelicula</h3>
                        <i className="fa-solid fa-xmark" onClick={ handleOpenModal }> </i>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr  />
                    </div>
                </div>

                <form onSubmit={(e) => handleOnSubmit(e) }>
                    <div className='row'>

                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="text" name='serial' 
                                value= {serial}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Titulo </label>
                                <input type="text" name='titulo' 
                                value={titulo}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Sipnosis </label>
                                <input type="text" name='sipnosis' 
                                value={sipnosis}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Url </label>
                                <input type="text" name='url' 
                                value={url}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">imagen</label>
                                <input type="text" name='imagen'
                                value={imagen} 
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Fecha_cracion </label>
                                <input type="date" name='fecha_cracion' 
                                value={fecha_cracion}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Fecha_actualizacion </label>
                                <input type="date" name='fecha_actualizacion' 
                                value={Fecha_actualizacion}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Año_estreno </label>
                                <input type="date" name='Año_estreno' 
                                value={Año_estreno}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Director </label>
                                <select className='form-select'
                                required
                                name= 'director'
                                value={director}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        director.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Genero </label>
                                <select className='form-select'
                                required
                                name= 'genero'
                                value={genero}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        genero.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Productora</label>
                                <select className='form-select'
                                required
                                name= 'productora'
                                value={productora}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        productora.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Tipo</label>
                                <select className='form-select'
                                required
                                name= 'tipo'
                                value={tipo}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        tipo.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                        
                    </div>  
                </form>

            </div>
        </div>
    </div>
  )
} 

  