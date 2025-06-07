import React from 'react';

function Card(props) {
    return (
        <>
            <div className='w-80 h-80 rounded-2xl bg-[#E8E8E8] flex flex-col gap-3 cursor-pointer border-2 border-gray-500'>
                <img src={props.imgUrl} alt="" className='w-80 rounded-t-2xl' />
                <h1 className='z-10 text-xl font-bold rounded-2xl px-2 '>{props.category}</h1>
                <div className='flex items-center gap-3 rounded-2xl px-2'>
                    <h2>Explore</h2>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>

        </>
    );
}

export default Card;
