import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { ToDo } from "../../app/types";

const initialState:ToDo[]=[
    {
       id:"1", todo:"wakeup",description:"must go to scholl",deadline:"2023-07-01"
    },
    {
        id:"2", todo:"go to school",description:"have an exammen",deadline:"2023-05-03"
    },
    {
        id:"3", todo:"go to school",description:"have an exammen",deadline:"2023-07-28"
    }
]

const TodoItemsSlice=createSlice({
    name:"TodoItems",
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<ToDo>)=>{
            state.push(action.payload)
            console.log("addtodo");
            
        },
        editTodo:(state,action:PayloadAction<{newTodo:ToDo,currentId?:string}>)=>{
            
            
        //    let edit=state.filter(todo=>todo.id===action.payload.id)
           let x = state.findIndex(object=>object.id===action.payload.currentId)
           state[x]=action.payload.newTodo
           console.log("currentId"+action.payload.currentId);
           console.log("XXXXXXX"+x);
           console.log("ACTION"+action.payload.newTodo.todo);
           
           
        },
        deleteTodo:(state,action)=>{
            state.splice(action.payload,1)
        }
    }
})

let x=[{a:"1"},{a:"2"}]
let y=x[0];


export const {addTodo,deleteTodo,editTodo}=TodoItemsSlice.actions;
export default TodoItemsSlice.reducer;