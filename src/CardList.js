import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    return (
        <div>
            {
            cats.map((cat, i) => {
             return (
               <Card 
                key={i} 
                id={cats[i].id} 
                name={cats[i].name} 
                email={cats[i].email}
            />
        );
     })
    }
    </div>
    );
}

export default CardList;