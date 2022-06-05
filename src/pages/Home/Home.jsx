import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { ImageSlider } from '../../components/ImageSlider';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { ProfileHeader } from '../../components/ProfileHeader';

function Home(props) {

    const sectionControl1 = useAnimation();
    const sectionControl2 = useAnimation();
    const sectionControl3 = useAnimation();

    const [sectionRef1, sectionInView1] = useInView();
    const [sectionRef2, sectionInView2] = useInView();
    const [sectionRef3, sectionInView3] = useInView();
    
    const sectionVariants = {
        hidden:{translateX:"-200%", scale:0, opacity:.3,},
        visible:{translateX:"0%",scale:1,opacity:1,transition:{duration:.4}}
    }

    useEffect(()=>{
        if(sectionInView1){
            sectionControl1.start('visible');
        }else{
            sectionControl1.start('hidden');
        }

        if(sectionInView2){
            sectionControl2.start('visible');
        }else{
            sectionControl2.start('hidden');
        }

        if(sectionInView3){
            sectionControl3.start('visible');
        }else{
            sectionControl3.start('hidden');
        }

    },[sectionControl1,sectionControl2,sectionControl3,sectionInView1,sectionInView2,sectionInView3])

    return (
        <div style={{
            
            // background: `url('https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
       
            background: `url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')  no-repeat center cover fixed right top`,
       }}>
            
            {/* <Header/> */}

            {/* <ImageSlider/> */}

            <ProfileHeader className="my-auto" style={{}} />


            <section style={{height:"100vh"}}  className="flex justify-center align-middle">
                <motion.div
                className='p-10 m-auto shadow-2xl bg-green-400 text-white rounded'
                ref={sectionRef1}
                variants={sectionVariants}
                initial="hidden"
                animate={sectionControl1}
                >
                    SECTION 1
                </motion.div>
            </section>
            <section style={{height:"100vh"}}  className="flex justify-center align-middle" >
                <motion.div     className='p-10 m-auto shadow-2xl bg-red-400 text-white rounded'
                     ref={sectionRef2}
                     variants={sectionVariants}
                     initial="hidden"
                     animate={sectionControl2}
                >
                    SECTION 2
                </motion.div>
            </section>
            <section style={{height:"100vh"}}  className="flex justify-center align-middle" >
            <motion.div     className='p-10 m-auto shadow-2xl bg-blue-400 text-white rounded'
                 ref={sectionRef3}
                 variants={sectionVariants}
                 initial="hidden"
                 animate={sectionControl3}
            >
                    SECTION 3
                </motion.div>
            </section>
        </div>
    );
}

export default Home;