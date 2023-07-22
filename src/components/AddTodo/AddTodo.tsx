import { useNavigate } from 'react-router-dom';
import {Formik,Field,ErrorMessage} from 'formik';
import * as  Yup from 'yup';
import { useAppDispatch,ToDo } from '../../app/types';
import { addTodo } from '../AllTodoItems/AllTodoItems.slice';
import {v4 as uuid} from 'uuid'
import { MyButton,FormLabel,FormikForm,MyMainDiv,MyButtonDiv } from '../Styles';


const AddTodo = () =>{

    const dispatch=useAppDispatch()
    const navigate=useNavigate();    
    const id = uuid().slice(0,8);

  const handleSubmit = (values:ToDo)=>{
    
    let {todo,description,deadline}=values;    
    let newTodo= {id,todo,description,deadline} as ToDo;    
    dispatch(addTodo(newTodo))
    navigate("/")     
}
  
  const textareaComponent= (props:any) =>(
    <textarea  {...props}/>
  )
  
  
      return <MyMainDiv>
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
      <FormikForm>
          <FormLabel>add new todo</FormLabel>
          <Field name="todo" type="text" 
          style={{display:"block",margin:"20px 0 10px 6em",width:"inherit"}} />
          <ErrorMessage name="todo"/>

          <FormLabel>add a description</FormLabel>
          <Field name="description" as={textareaComponent} 
          style={{display:"block",margin:"20px 0 10px 6em",width:"inherit"}}/>
          
          <ErrorMessage name="description"/>

          <FormLabel>add new todo</FormLabel>
          <Field name="deadline" type="date"
          style={{display:"block",margin:"20px 0 10px 6em",width:"inherit"}} />
          <ErrorMessage name="deadline"/>
          <MyButtonDiv>
          <MyButton type="submit">Submit</MyButton>
          <MyButton onClick={()=>navigate("/")}>cansel</MyButton>
            </MyButtonDiv>  
          
      </FormikForm>

    </Formik>

      </MyMainDiv>
      
      

    
}

export default AddTodo;