import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//TEMA: CUSTOM HOOKS
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // //Solo se dispara solo unica vez, Inicialzia una sola vez
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                // setTimeout( () => {
                    
                    console.log( imgs );
                    setState({
                        data: imgs,
                        loading: false
                    }) 

                // }, 3000);
            });
        //getGifs();
    }, [ category ])

    return state; //Retorna { data: [], loading: true }

}