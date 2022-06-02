import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

function ImageSlider({}) {
	return (
		<>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={{ dynamicBullets: true }}
                draggable={true}
				// mousewheel={true}
				keyboard={true}
				rewind={true} 
                // effect={"coverflow"}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<SwiperSlide><div className="sliderCard">Slide 1</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 2</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 3</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 4</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 5</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 6</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 7</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 8</div></SwiperSlide>
				<SwiperSlide><div className="sliderCard">Slide 9</div></SwiperSlide>
			</Swiper>
		</>
	);
}

export default ImageSlider;
