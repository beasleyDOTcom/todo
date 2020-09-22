import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List(props) {
    console.log(props.list, 'props dot list')
    console.log(props, 'this is props')
    return (
        <ListGroup>
            {props.list.map((item) => (
                console.log(item),
                <ListGroup.Item action variant={item.complete ? "success": "danger"}
                    key={item._id}
                    onClick={() => props.handleComplete(item._id)}
                >
                    <span >
                        {item.text}
                        
                    </span>
               
                </ListGroup.Item>
            ))
            }
        </ListGroup>
    )
}