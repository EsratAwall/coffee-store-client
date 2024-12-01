import React from 'react';
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './CoffeeCard'
import { useState } from 'react';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
  
    return (
      <div className='m-20'>
        
        <h1 className='text-5xl text-center my-20 font-extrabold text-purple-800'>Hot Cold Coffee: {coffees.length}</h1>
       <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
       {
          coffees.map(coffee => <CoffeeCard key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
       </div>
      </div>
    )
};

export default Home;