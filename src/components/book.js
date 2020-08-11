import React from 'react'
import { Buybook } from '../redux/book/bookaction';
import { connect } from 'react-redux';


 function Book(props) {
    return (
        <div>
        
            <h1>
                No oF Books - {props.book}
            </h1>
            <button
            onClick={props.Buybook}>Buy Book</button>
            
        </div>
    )
}
const  mapStatetoProps=(state)=>{
    return{
            book:state.book
    }
}
const mapDispatchProps=(dispatch)=>{
    return{
        Buybook:function(){
            dispatch(Buybook());
        }
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(Book) ;