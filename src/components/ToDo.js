import React, { useState, useEffect } from 'react';
import FormComponent from './form.js';
import TodoList from './list.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import './todo.scss';
import useAjax from './useAjaxHook.js';

export default function TODO() {
    const url='http://localhost:3005/api/v1/todos/';
    const [list, setList] = useState([]);

    const addItem = (item) => {
        item.complete = false;

        async function _addItem() {
            let response = await useAjax({url, body:item, method: 'post'})
            // let response = await axios.get(url)
            console.log('result from addItem', response)
            item._id = response.data._id;
            
            setList([...list, item]);
        }
        _addItem();
 
    }

    const toggleComplete = id => {
        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {
            item.complete = !item.complete;
            let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList(newList)
        }
        async function _toggleComplete() {
            await useAjax({url:`${url}${item._id}`, body:item, method: 'put'});
        }
        _toggleComplete();

    };

    function handleDelete(id){
        async function _handleDelete(id) {
            await useAjax({url:url+id, method:'delete'});
            let newList = list.filter(item => item._id !== id);
            return setList(newList);
        }
        _handleDelete(id);
    }

    useEffect(() => {

        async function _getSeedData() {
            console.log('inide of _getSeedData')
            let response = await useAjax({url, method: 'get'});
            console.log('this is the response from original get', response)
            setList(response.data.results)
        }
        _getSeedData();
    }, []);
    return (
        <>
            <header>
                <Navbar bg="primary" variant="dark" className="mr-top-auto">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>

                </Navbar>
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
                        <TodoList
                            list={list}
                            handleComplete={toggleComplete}
                            handleDelete={handleDelete}
                        />
                    </Col>

                </Row>
            </Container>
        </>
    )
}