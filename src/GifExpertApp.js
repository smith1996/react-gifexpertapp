import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import ReactDOM from 'react-dom';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleApp = () => {
    //     //seCategories([...categories, 'HunterXHunter']) // permite establecer nuevo valor para los HOOKS con estados.
    //     seCategories( cats => [...categories, 'HunterXHunter']); 
    // }

    return (
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            {/* <button onClick={ handleApp }>Agregar</button> */}

            <ol>
                {
                    categories.map( category  => ( 
                        <GifGrid 
                            key = { category }
                            category= { category } 
                        /> 
                    ))
                }
            </ol>


        </>
    );
}



