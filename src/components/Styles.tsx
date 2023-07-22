import styles from 'styled-components';
import {Form} from 'formik';


export const MyMainDiv = styles.div`
&{
    background-color: grey;
    padding:50px;
}
`
export const MyDiv = styles.div`
&{
    width:60%;
    margin:20px auto;
    padding-top:1px;
    cursor:pointer;
}
`
export const MyButtonDiv = styles.button`
&{
    position: relative;
    background-color: inherit;
    border: none;
    left: 50%;
}
`
export const MyTodoDiv = styles.div`
&{
    position: relative;
    background-color: inherit;    
    margin: 90px 200px 100px;
}
`

export const MyButton = styles.button`
&{
    padding:10px 20px;
    // position: sticky; 
    text-size: 1em;   
    cursor: pointer;
    background-color: gray;
    color: white;
    border: none;
    margin: 5px;    
}
&:hover{
    color: blue;
    background-color: goldenrod;
}
`
export const MyH1 = styles.h1`
&{
    margin: auto;
    text-align:center;    
    color:white;
}
`

export const FormLabel = styles.label`
&{
    padding: 0 70px 5px;
    font-weight: bold;
}
`
export const FormikForm = styles(Form)`
&{
    margin: 30px auto 145px;
    width:70%;
    background-color: green;    
    padding: 70px 0 0 0;    
}
`