import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';


export default function List(props) {
    return (
        <>
            <ListGroup>
                {props.list.map((item) => (

                    <ListGroup.Item key={item._id}>
                        <Toast autohide={false} onClose={()=>props.handleDelete(item._id)}
                            onClick={() => props.handleComplete(item._id)}>
                            <Toast.Header>
                                <Badge pill variant={item.complete ? "danger" : "success"}>{item.complete ? "Complete" : "Pending" }</Badge>
                                <strong className="mr-auto">{item.assignee}</strong>
                                {/* <small>{item.complete ? "Pending" : "Complete"} </small> */}
                            </Toast.Header>
                            <Toast.Body>
                                <span>
                                    <p>{item.text}</p><small>Difficulty: {item.difficulty}</small>
                                </span>
                            </Toast.Body>
                        </Toast>
                    </ListGroup.Item>
                ))
                }
            </ListGroup>

        </>
    )
}
