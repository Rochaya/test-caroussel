import React from 'react'
import imagesData from './data-images/images.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/bundle';



export default function Caroussel() {
  const imgData  = imagesData.slider;
  
  return (
    <div className='caroussel'>
      <div className='content-caroussel'>
        <h1 className='title-service'>Nos services.</h1>
        <hr />
        <p>Inforomu vous accompagne dans tout vos projets, vous trouverez ici tout les domaines dans lesquelles nous intervenons.</p>
        <a href="#" className='btn-contact-service'>Nous contacter</a>
      </div>

      <Swiper  
        className='swiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2
        }}
        loop={true}
        pagination={{clickable: true}}
        slidesPerView={1}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 2
          }
        }}
      
      >
        {
          imgData.map((data, i) => (
            <SwiperSlide key={i} style={{ backgroundImage: `url(${data.url})` }} className="swiper-slider">
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <a href="#" className='btn-show-service'>Parcourir</a>
                </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
