import React from 'react';

function Card(props) {
    return (
        <>
            <div className='w-80 h-50 text-black rounded-2xl bg-cover bg-center relative flex flex-col justify-end p-5 gap-3 hover:brightness-85 cursor-pointer'
                style={{ backgroundImage: `url(${props.imgUrl})` }}>
                <h1 className='z-10 text-xl font-bold bg-white/10 backdrop-blur-md rounded-2xl px-2'>{props.category}</h1>
                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-2'>
                    <h2>Explore</h2>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>

        </>
    );
}

export default Card;
