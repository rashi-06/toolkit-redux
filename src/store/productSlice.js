import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data : [],
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers : {
        add(state , action){
            state.push(action.payload);//pushing
        },
        remove(state , action){
            return state.filter(item => item.id !== action.payload);
        }
    }
})


export const getProducts = () =>{
     
}


export const {add , remove} = productSlice.actions
export default productSlice.reducer