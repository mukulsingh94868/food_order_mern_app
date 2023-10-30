import React, { useEffect } from 'react';
import Pizza from '../components/Pizza';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const pizzState = useSelector((state) => state.getAllPizzaReducer);
    const { pizzas, error, loading } = pizzState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);
    return (
        <div>
            <div className='row justify-content-center'>
                {
                    loading ? (
                        <h1>Loading...!</h1>
                    ) : error ? (
                        // when endpoints are not as same as the backend endpoints
                        <h1>Something went wrong try again later...</h1>
                    ) : (
                        pizzas?.map((pizza) => {
                            return (
                                <div className='col-md-3' key={pizza?._id}>
                                    <div>
                                        <Pizza pizza={pizza} />
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default HomeScreen
