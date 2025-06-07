import React from 'react';

function PropertyCard(props) {
    return (
        <>
            <div className='w-80 h-100 flex flex-col border-2 border-gray-400 rounded-2xl'>
                <img src={props.imgUrl} alt="" className='h-55 rounded-t-2xl' />
                <div className='flex flex-col justify-evenly pl-5 py-2 h-45'>
                    <p className='text-xl font-semibold'>₹ {props.price} <span className='text-gray-600'>/ Month</span> </p>
                    <p>{props.location}</p>
                    <p>{props.owner} <span className='bg-gray-400 px-1 rounded text-gray-800'>{props.gender}</span></p>
                    <button className='bg-[#D8232A] w-[55%] p-2 text-[18px] cursor-pointer text-white rounded-xl'>Contact Owner</button>
                </div>

            </div>
        </>
    );
}

export default PropertyCard;
