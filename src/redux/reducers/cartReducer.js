import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState :{
        list:[]
    },
    reducers:{
        addItem:(state,{payload}) => {        
            state.list =[...state.list,{...payload,count:1,st:payload.price,}]

        },
        RemoveItem:(state,{payload})=>{
            const index = state.list.findIndex((product)=>product.id === payload.id)
       
           state.list=[          
            ...state.list.slice(0,index),
            ...state.list.slice(index+1)
           ];
        },
        ModifyItem:(state,{payload})=>{
            const index = state.list.findIndex(
                (product)=> product.id=== payload.id);
             
            state.list=[...state.list.slice(0,index),
                {...state.list[index],count:payload.count,st:payload.st*payload.count},
                ...state.list.slice(index+1),               
            ];
        },
      
        
    },
    
})

export const {addItem,RemoveItem,ModifyItem } = cartSlice.actions;
export default cartSlice.reducer; 