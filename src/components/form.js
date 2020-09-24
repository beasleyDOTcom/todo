import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
 
import useForm from './useFormHook.js';


function FormComponent(props) {

    // const handleInputChange = event => {
    //     setItem({ ...item, [event.target.name]: event.target.value })
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(item, 'item is here')

    //     event.target.reset();
    //     ///////////// I don't know why having e.target.reset() is giving me so much trouble
    //     props.handleSubmit(item);
    //     // const item = {};
    //     setItem({});
    // }
    // const [item, setItem] = useState({ item: {} });
    const { handleInputChange, handleSubmit } = useForm(submitFunction);
    

    function submitFunction (item){
       return props.handleSubmit(item);
    }
    return (
        <Container>
            <h3>Add Item</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    <Form.Text>To Do Item</Form.Text>
                    <Form.Control
                        name="text"
                        placeholder="Add to Do List Item"
                        onChange={handleInputChange}
                    />
                </Form.Label>
                <Form.Label>
                    <Form.Text> Difficulty Rating</Form.Text>
                    <Form.Control
                        defaultValue="1"
                        type="range"
                        min="1"
                        max="5"
                        name="difficulty"
                        onChange={handleInputChange} />
                </Form.Label>
                <Form.Label>
                    <Form.Text>Assigned To</Form.Text>
                    <Form.Control
                        type="text"
                        name="assignee"
                        placeholder="Assigned To"
                        onChange={handleInputChange} />
                </Form.Label>
                <Button variant="primary" type="submit">Add Item</Button>
                {/* <button> add me</button> */}
            </Form>
        </Container>
    )
}

export default FormComponent;