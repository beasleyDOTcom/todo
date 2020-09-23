import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List(props) {
    return (
        <ListGroup>
            {props.list.map((item) => (
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