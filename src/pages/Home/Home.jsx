import React from 'react';
import { Header } from '../../components/Header';
import { ImageSlider } from '../../components/ImageSlider';

function Home(props) {
    return (
        <div>
            HOME Page
            <Header/>

            <ImageSlider/>


            <section style={{height:"100vh"}} >NEW SECTION</section>
        </div>
    );
}

export default Home;