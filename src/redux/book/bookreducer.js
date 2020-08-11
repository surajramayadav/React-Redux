import {BUY_BOOK} from './booktype'

const initial={
    book:10
}

const Bookreducer=(state=initial,action)=>{
   switch(action.type)

   {
       case BUY_BOOK:return{
           ...state,
           book:state.book-1
       }
       default:return state
   }
}
export default Bookreducer;