import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Dishes() {
    const [dishes, setDishes] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState([]);

    useEffect(() => {
        fetchDishes();
    }, []);

    const fetchDishes = async () => {
        try {
            const res = await axios.get('http://localhost:7000/dishes/all');
            setDishes(res.data);
            setFilteredDishes(res.data);
        } catch (error) {
            console.log('Error fetching dishes:', error);
        }
    };

    const togglePublish = async (dishId) => {
        try {
            await axios.put(`http://localhost:7000/dishes/${dishId}/toggle`);
            setFilteredDishes(filteredDishes.map(dish => {
                if (dish.dishId === dishId) {
                    return { ...dish, isPublished: !dish.isPublished };
                }
                return dish;
            }));
        } catch (error) {
            console.log('Error toggling publish status:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredDishes(dishes);
        } else {
            setFilteredDishes(dishes.filter(dish =>
                dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <div className='container'>
                <div className='row'>
                    {filteredDishes.map(dish => (
                        <div className='col-md-4 mt-3' key={dish.dishId}>
                            <div className='card' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                                <img src={dish.imageUrl} alt={dish.dishName} className='card-img-top' style={{ height: '250px', objectFit: 'cover' , padding: '5px',}} />
                                <div className='card-body'>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className='card-title'>{dish.dishName}</h5>
                                            <p className='card-text'>{dish.isPublished ? 'Published' : 'Unpublished'}</p>
                                        </div>
                                        <button className='btn btn-secondary' onClick={() => togglePublish(dish.dishId)}>
                                            {dish.isPublished ? 'Unpublish' : 'Publish'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dishes;
