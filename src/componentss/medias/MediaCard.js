import React from 'react'
import { Link } from 'react-router-dom';

export const MediaCard = (props) => {

    const { media } = props

  
    return (
      <div className="col">
        <div className="card">
          <img src={media.imagen} className="card-img-top" alt="Img" />
          <div className="card-body">
            <h5 className="card-title">Características</h5>
            <hr />
            <p className="card-text">{`Serial: ${media.serial}`}</p>
            <p className="card-text">{`titulo: ${media.titulo}`}</p>
            <p className="card-text">{`sipnosis: ${media.sipnosis}`}</p>
            <p className="card-text">{`url: ${media.url}`}</p>
            <p className="card-text">{`genero_principal: ${media.genero.genero}`}</p>
            <p className="card-text">{`director_principal: ${media.director.director}`}</p>
            <p className="card-text">{`productora: ${media.productora}`}</p>
            <p className="card-text">{`tipo: ${media.tipo}`}</p>
            <p className="card-text">
              <a href="#">Ver más...</a> {/* Agregado el atributo href */}
              <Link to = {`medias/edit/${media._id}`}>Ver más...</Link>
            </p>
          </div>
        </div>
      </div>
    );
  };