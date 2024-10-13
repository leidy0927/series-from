import React, { useEffect, useState } from "react";
import { getMedias } from "../../service/mediaService";
import { MediaCard } from "./MediaCard"; 
import { MediasNew } from "./MediaNew";  

export const MediasView = () => {
  const [medias, setMedias] = useState([]);
  const [openModal, setOpenModal] = useState(false); 

  const listarMedias = async () => {
    try {
      const { data } = await getMedias();
      console.log(data);
      setMedias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMedias();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          medias.map((media) => (
            <MediaCard key={media._id} media={media} />
          ))
        }
      </div>
      {
        openModal ? (
          <MediasNew  
            handleOpenModal={handleOpenModal}
            listar={listarMedias} 
          />
        ) : (
          <button className="btn btn-primary agr" onClick={handleOpenModal}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )
      }
    </div>
  );
};