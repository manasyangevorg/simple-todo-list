import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import {Formik,Field,Form,ErrorMessage} from 'formik';
import * as  Yup from 'yup';
import { useAppDispatch,useAppSelector,ToDo,ButtonProps } from '../../app/types';
import { editTodo } from '../AllTodoItems/AllTodoItems.slice';
import {v4 as uuid} from 'uuid';
import { MyButton,FormLabel,MyDiv } from '../Styles';



const Edit = (props:ButtonProps) =>{

  const obj=useAppSelector(state=>state.filter(item=>item.id===props.editableItem));
  const dispatch=useAppDispatch()
  const navigate=useNavigate();  
  const id = uuid().slice(0,8);  
  let currentId=obj[0].id; 
  let{todo,description,deadline}=obj[0];

    const handleSubmit = (values:ToDo)=>{
        
        let {todo,description,deadline}=values;       
        let newTodo= {id,todo,description,deadline} as ToDo;       
          dispatch(editTodo({newTodo,currentId}))
          props.closeModal()
          navigate("/") 
         
    }
    
    const textareaComponent= (props:any) =>(
        <textarea  {...props}/>
      )
    
    const modalStyle={content:{width:"400px",margin:"auto", background:"#ff9800"},
                      overlay:{background:"darkslateblue"}}
    return <Modal
    isOpen={true}
    ariaHideApp={false}
    style={modalStyle}
    >
      <Formik
      initialValues={{id:"",todo:"",description:"",deadline:""}}
      validationSchema={Yup.object({
        todo: Yup.string()
        .max(10,'Must be 10 caracters or less')
        .required('Required'),
        description: Yup.string()
        .max(30,'Must be 30 caracters or less')
        .required('Required'),
        deadline: Yup.date()        
        .required('Required')
      })}
      onSubmit={handleSubmit}
    >
      <Form style={{marginTop:"80px"}}>
          <FormLabel>add new todo</FormLabel>
          <Field name="todo" type="text" placeholder={todo} 
          style={{display:"block",margin:"20px 0 10px 6em",width:"70%"}}/>
          <ErrorMessage name="todo"/>

          <FormLabel>add a description</FormLabel>
          <Field name="description" as={textareaComponent} placeholder={description}
          style={{display:"block",margin:"20px 0 10px 6em",width:"70%"}} />          
          <ErrorMessage name="description"/>

          <FormLabel>add new todo</FormLabel>
          <Field name="deadline" type="date" placeholder={deadline}
          style={{display:"block",margin:"20px 0 10px 6em",width:"70%"}} />
          <ErrorMessage name="deadline"/>

            <MyDiv>
            <MyButton type="submit">Submit</MyButton>
            <MyButton onClick={()=>props.closeModal()}>cancel</MyButton>
            </MyDiv>
          
      </Form>

    </Formik>  
    
    </Modal>
}

export default Edit;