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
let count = 0;
export default function TODO() {

    const [list, setList] = useState([]);

    const addItem = (item) => {
        item.complete = false;
       
        async function _addItem(){
            let result = await axios.post('http://localhost:3005/api/v1/todos', item)
            item.id= result.data._id;
            console.log('this is item', item)
        }
        _addItem();
        setList([...list, item]);
    }

    const toggleComplete = id => {
        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            item.complete = !item.complete;
            let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList(newList)
        }

    };

    useEffect(() => {
        async function getSeedData() {
            let response = {};
            response = await axios.get('http://localhost:3005/api/v1/todos')
            console.log('this is the response back from api', response)
            setList(response.data.results)
        }
        getSeedData();
    }, []);
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