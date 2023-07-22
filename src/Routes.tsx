import { BrowserRouter,Routes,Route } from "react-router-dom";
import AllTodoItems from "./components/AllTodoItems/AllTodoItems";
import SingleTodoCard from "./components/SingleTodoCard/SingleTodoCard";
import AddTodo from "./components/AddTodo/AddTodo";

export const MyRoutes =()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AllTodoItems/>}/>            
            <Route path="single" element={<SingleTodoCard/>} />
            <Route path="addTodo" element={<AddTodo/>} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
    )
}