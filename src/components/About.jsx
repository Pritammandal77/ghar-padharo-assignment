import React from 'react';

function About(props) {
    return (
        <>
            <div className='w-[85vw] lg:w-[25vw] border-2 border-gray-300 rounded-3xl p-4 flex flex-col items-center'>
                <img src={props.svgUrl} alt="" className='h-30' />
                <h1 className='font-semibold'>{props.heading}</h1>
                <p className='text-center'>{props.para}</p>
            </div>
        </>
    );
}

export default About;
