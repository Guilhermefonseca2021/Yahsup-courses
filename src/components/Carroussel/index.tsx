import { Swiper, SwiperSlide } from "swiper/react"
import './styles.css'

export default function Carroussel() {

  const data = [
    { id: 1, image: 'https://images.unsplash.com/photo-1634103945271-af8201edcf04?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, image: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, image: 'https://plus.unsplash.com/premium_photo-1664301240097-fcb33fe1dfd5?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]

  return (
    <div className="container">
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {data.map((item) => {
            return(
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="slider" className="slide-item" />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}
