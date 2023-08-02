import React,{useState} from "react";

import {
    FormGroup,
    Input,
    InputGroup,
    Button,
    Form,
   
} from "reactstrap"

import {v4} from 'uuid' ;


const TodoForm = ({addTodos}) => {

    const [todoString ,setTodoString] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if(todoString ===''){
            return alert('please fill some value')
        }
        const todo = {
            title:todoString,
            id:v4()
        }

        addTodos(todo)

        setTodoString('')
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id='todo' placeholder="ebeter the todo" value={todoString} onChange={(e)=>setTodoString(e.target.value)}/>
                    <Button color="success">TODO</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;