import React from 'react';
import pizzas from '../pizzaData';
import Pizza from '../components/Pizza';


const HomeScreen = () => {
  return (
    <div>
        <div className='row'>
            {
               !!pizzas && pizzas?.map((pizza) => {
                return (
                    <div className='col-md-4'>
                        <div>
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                )
               }) 
            }
        </div>
    </div>
  )
}

export default HomeScreen
