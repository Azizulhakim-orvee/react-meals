import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Body = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => setItems(res.data.meals))
    }, [])

    const itemsList = items.map((item) =>{
        return <div>
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb} className="image-fluid" alt="" />
            <p>{item.idMeal}</p>
        </div>
    })
  
  

    return (
        <div>
        <div className="row">
        {itemsList}

        </div>

        </div>


    )


    
};

export default Body; 