import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import {FaCheckDouble} from 'react-icons/fa'

const Todos = ({todos,markcomplete}) => {
    return (
        <ListGroup className='mt-5 mb-2 items'>
            {todos.map(todo => (
                <ListGroupItem key = {todo.id}>

                    {todo.todoString}
                    <span className='float-right' onClick={()=> markcomplete(todo.id)}><FaCheckDouble/></span>

                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos