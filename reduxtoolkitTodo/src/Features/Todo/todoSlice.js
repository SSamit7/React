import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialStage = 
{
    todos: [{id :1 , text: "Hola mundo "}]

}
export const todoSlice =createSlice({
    name :"todo",
    initialState : {
    todos: [{id :1 , text: "Hola mundo "}]

},
     reducers: {
        addTodo :(state , action )=>{
            const todo = {
                id :nanoid(),
                text: action.payload
             }
             state.todos.push(todo)   //push todo to satate 
        },
        removeTodo : (state , action )=>{
            state.todos = state.todos.filter((todo)=>todo.id  !==action.payload )
        },
     }
     
})


export const {addTodo , removeTodo} = todoSlice.actions 
export default todoSlice.reducer
