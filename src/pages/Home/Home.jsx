import React from 'react';
import Card from '../../components/card';
import About from '../../components/About';
import PropertyCard from '../../components/PropertyCard';

function Home() {
  return (
    <>
      <div className='flex w-[100vw] flex-col items-center montserrat-font justify-center p-4 py-10 xl:p-20'>

        <div className='flex items-center p-4 xl:px-20 justify-center gap-20  '>

          <div className='flex flex-col items-center gap-10 pt-10 xl:pt-0'>
            <h1 className='text-3xl text-center '>Find a home away from home</h1>
            <ul className='hidden xl:flex flex-row gap-10 font-semibold '>
              <li>Buy</li>
              <li>Rent</li>
              <li>MagicHomes</li>
              <li>PG</li>
              <li>Plot</li>
              <li>Commercial</li>
              <li>Post Free Property Add</li>
            </ul>

            <div className='w-[90vw] xl:w-[70vw] flex flex-row border-2 border-gray-300 rounded-3xl'>

              <div className='w-[80%] md:w-[80%] xl:w-[35%] flex items-center justify-center gap-3'>
                <i className="fa-solid fa-location-dot text-red-500"></i>
                <input type="text" className='w-[80%] px-3 py-2 border-none outline-none rounded-3xl' placeholder='Enter city name' />
              </div>

              <div className='w-[25%] hidden xl:flex flex-row cursor-pointer justify-center gap-2 items-center px-3 '>
                <i className="fa-solid fa-house text-red-500"></i>
                <p>Property Type</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>

              <div className='w-[25%] hidden xl:flex flex-row cursor-pointer justify-center gap-2 items-center px-3 '>
                <i className="fa-solid fa-indian-rupee-sign text-red-400"></i>
                <p>Budget</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>

              <div className='w-[20%] xl:w-[15%] flex items-center self-end'>
                <button className='bg-[#D8232A] w-[100%] text-white cursor-pointer px-6 lg:px-7 py-3 flex gap-3 items-center rounded-3xl font-semibold hover:bg-red-700'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <p className='hidden md:flex'>Search</p>
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className='w-full pt-8 xl:pt-15 flex flex-col gap-10 py-10'>
          <div>
            <h1 className='text-2xl md:text-3xl text-center xl:text-left'>Find a PG & Hostel Away from Home</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 self-center gap-6'>
            <Card imgUrl="/student-friendly-pg.jpg" category="Student friendly PG's" />
            <Card imgUrl="/boys-pg.jpg" category="PG for Boys" />
            <Card imgUrl="/girls-hostel.jpg" category="Hostel for Girls" />
            <Card imgUrl="/girls-pg.jpg" category="PG for Girls" />
          </div>
        </div>

        <div className='w-[100vw] flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-10 bg-[#E8E8E8]'>
          <About svgUrl="/verified-20k-list.svg" heading="20K+ Verified Listings" para="Choose from thousands of 100% genuine PG homes. Single room or a shared one, we have got it all." />
          <About svgUrl="/unique-monthly-users.svg" heading="75,000+ Unique Monthly Users" para="Trust us to find the right tenant for you as we have the reach that most other platforms do not." />
          <About svgUrl="/data-30-point.svg" heading="300+ Data Points Per PG" para="We are here to make it easier for you to select a PG with the highest number of data points in the Industry." />
        </div>
      </div>

      <div className='flex flex-col items-center py-10'>
        <div>
          <h1 className='text-3xl lg:text-4xl px-5 text-center lg:text-left'>PG Homes with Wi-Fi & many facilities</h1>
        </div>
        <div className='w-[100vw] md:w-[90vw] lg:[80vw] xl:w-[100vw] xl:px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center py-10 gap-y-5' >
          <PropertyCard imgUrl="/property1.jpg" price="12000" location="Dadar West, Mumbai" owner="Rudra Real Estate" gender="For Girls" />
          <PropertyCard imgUrl="/property2.jpg" price="10999" location="Juhu, Mumbai" owner="Maruti Estate Agency" gender="For Boys" />
          <PropertyCard imgUrl="/property3.jpg" price="11999" location="Dadar East, Mumbai" owner="Hello Builders" gender="For Boys" />
          <PropertyCard imgUrl="/property4.jpg" price="13999" location="Andheri East, Mumbai" owner="Pritam Residence" gender="For Girls" />
        </div>
      </div>

    </>
  );
}

export default Home;
