import { useLocation } from "react-router-dom";
import Edit from '../Edit/Edit';
import { useState } from "react";
import { useAppDispatch } from "../../app/types";
import { deleteTodo } from "../AllTodoItems/AllTodoItems.slice";
import { MyMainDiv,MyButtonDiv,MyButton,MyH1,MyTodoDiv } from "../Styles";

const SingleTodoCard = ({...props}) =>{
    
    const{id,todo,description,deadline,handleEdit,setSingle,single}=props
    const[editTodo,setEditTodo]=useState(-1);    
    const location=useLocation();
    const dispatch=useAppDispatch();    
    const editableItem = id;
    
    const onHandleEdit = () =>{
        handleEdit(1,id)
        setEditTodo(1)
        setSingle(-1)
    }
    const handleDelete = () => {
       dispatch(deleteTodo(single))
       setSingle(-1)
    }

    return <MyMainDiv style={{backgroundColor:"darkviolet"}} >
        <MyH1>Single</MyH1>
        <MyTodoDiv>
        <h1>{todo}</h1>
        <p>{description}</p>
        <p>{deadline}</p>
        <MyButtonDiv>
        <MyButton onClick={()=>onHandleEdit()} >edit</MyButton>
        <MyButton onClick={()=>handleDelete()} >delete</MyButton>
        <MyButton onClick={()=>setSingle(-1)}>cancel</MyButton>
        </MyButtonDiv>
        </MyTodoDiv>        
        
        {            
        editTodo!=-1 && <Edit closeModal={()=>setEditTodo(-1) } editableItem={editableItem} />
    }
    </MyMainDiv>
    
}


export default SingleTodoCard;