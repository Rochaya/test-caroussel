import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import imagesData from './data-images/images.json';



export default function Caroussel() {
  const [imgData, setImgData] = useState(imagesData.slider);
  
  useEffect(() => {
    
  }, []);



  return (
    <div className='caroussel'>
      <div className='content-caroussel'>
        <h1 className='title-service'>Nos services.</h1>
        <hr />
        <p>Inforomu vous accompagne dans tout vos projets, vous trouverez ici tout les domaines dans lesquelles nous intervenons.</p>
        <a href="#" className='btn-contact-service'>Nous contacter</a>
      </div>

      <div className="carousel">
        {imgData.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
