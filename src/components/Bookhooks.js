import React from 'react'
import { Buybook } from '../redux/book/bookaction';
import {useSelector,useDispatch} from 'react-redux';

 function Bookhooks() {
     const book = useSelector(state => state.book)
     const dispatch = useDispatch()
    return (
        <div>
        
            <h1>
              Hooks -{book}
            </h1>
            <button
            onClick={()=>dispatch(Buybook())}>Buy Book</button>
            
        </div>
    )
}

export default Bookhooks ;