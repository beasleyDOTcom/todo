import React, { useState, useEffect } from 'react';
import FormComponent from './form.js';
import TodoList from './list.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import './todo.scss';

export default function TODO() {

    const [list, setList] = useState([]);

    const addItem = (item) => {
        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
    }

    const toggleComplete = id => {
        console.log(" you've made it to todo js")
        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            item.complete = !item.complete;
            let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList(newList)
        }

    };

    useEffect(() => {
        // let list = [
        //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
        //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
        //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person C' },
        //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
        //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
        // ];
        async function getSeedData() {
            let response = {};
            response = await axios.get('http://localhost:3005/api/v1/todos')
            console.log('this is the response back from api', response)
            setList(response.data.results)
        }
        getSeedData();
    }, []);
    console.log('this is list', list)
    return (
        <>
            <header>
                <Navbar bg="primary" variant="dark" className="mr-top-auto">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>

                </Navbar>
                {/* <h2>
                    There are {list.filter(item => !item.complete).length} Items To Complete
                </h2> */}
            </header>
            <Container>

                <Row>
                    <Navbar className="navy" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <h2>
                                To Do List Manager({list.filter(item => !item.complete).length})
                            </h2>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card>

                            <div>
                                <FormComponent handleSubmit={addItem} />
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div>
                            <TodoList
                                list={list}
                                handleComplete={toggleComplete}
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}