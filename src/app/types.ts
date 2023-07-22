import {RootState,AppDispatch} from './store';
import { TypedUseSelectorHook,useDispatch,useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

export interface ToDo{
    id:string,
    todo:string,
    description:string,
    deadline:string
}
export interface ButtonProps{
    closeModal:()=>any,
    editableItem?:string,
    // handleEdit:(i:number,id:string)=>void
    // editableItem:number
    // closeModal(onClick:(editTodo:any, e:Event)=>void):void
}
export interface Edit{
    editableItem:any
}
