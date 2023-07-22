import { Link} from "react-router-dom";
import { useAppSelector,useAppDispatch, ToDo } from "../../app/types";
import {deleteTodo} from './AllTodoItems.slice';
import { useState } from "react";
import Edit from '../Edit/Edit';
import SingleTodoCard from "../SingleTodoCard/SingleTodoCard";
import { MyButton,MyDiv,MyH1,MyMainDiv,MyButtonDiv } from "../Styles";

const AllTodoItems = () =>{
    const[editTodo,setEditTodo]=useState(-1);
    const[editableItem,setEditableItem]=useState("")
    const[single,setSingle]=useState(-1)
    const[singleState,setSingleState]=useState({id:"",todo:"",description:"",deadline:""});
    
    const state=useAppSelector(state=>state)
    const dispatch=useAppDispatch();
    
    const randomColor=()=>{
        let r=Math.floor(Math.random()*250)
        let g=Math.floor(Math.random()*250)
        let b=Math.floor(Math.random()*250)
        return `rgb(${r},${g},${b})`
    }
    const handleEdit =(i:number,id:string)=>{
        setEditTodo(i)
        setEditableItem(id)       
    } 

    const setSinglePage = (i:number,item:ToDo) =>{
        setSingle(i);
        setSingleState(item)        
    }
    
    return (single!==-1)? 
    
        <SingleTodoCard  {...singleState} single={single} handleEdit={handleEdit} setSingle={setSingle}/>
        
    :
    <MyMainDiv >
    <MyH1>All Todo Items</MyH1>
    <Link to="/addtodo" 
    style={{position:"fixed", textDecoration:"none",marginLeft:"5%", 
    fontSize:"1em",fontWeight:"bold",color:"whiteSmoke"}} >Add New Todo</Link>
    {
        state.map((item,i)=>{
            return <MyDiv style={{backgroundColor:randomColor()}} key={i}>                
                <MyDiv onClick={()=>setSinglePage(i,item)}>
                <h1>{item.todo}</h1>
                <p>{item.description}</p>
                <h3>{item.deadline}</h3>
                </MyDiv>  
                <MyButtonDiv>
                <MyButton style={{left:"65%"}} onClick={()=>handleEdit(i,item.id)}>edit</MyButton>
                <MyButton style={{left:"80%"}} onClick={()=>dispatch(deleteTodo(i))}>delete</MyButton>
                </MyButtonDiv>          
                
            </MyDiv>
        })
    }
    {            
        editTodo!=-1 && <Edit closeModal={()=>setEditTodo(-1) } editableItem={editableItem} />
    }
    
</MyMainDiv>
}


export default AllTodoItems;