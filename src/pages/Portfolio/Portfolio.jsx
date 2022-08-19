import React from 'react';

function Portfolio(props) {
    return (
        <div className='d-flex border-4 rounded-xl p-4 border-red-400 flex-col gap-2 justify-center items-center  
        mx-3 sm:mx-20
        '>
           

        <h2 className='font-bold text-4xl mb-6'>Webgl Projects</h2>
        <div className="flex">
        <h4 className='shadow-lg p-2 rounded-xl transition-all hover:-translate-y-1 hover:bg-red-400 hover:text-white hover:shadow-2xl'><a href='https://portfolio.amitkarn.com.np' target="blank">Webgl 3d Text</a></h4>
        <h4 className='shadow-lg p-2 rounded-xl  transition-all hover:-translate-y-1 hover:bg-red-400 hover:text-white hover:shadow-2xl'><a href='https://admin.amitkarn.com.np' target="blank">Haunted House</a></h4>
         
        </div>
       

        </div>
    );
}

export default Portfolio;