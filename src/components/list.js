import React, { useState, useEffect } from 'react';

export default function List(props) {
    console.log(props.list, 'props dot list')
    return (
        <ul>
            {props.list.map((item) => (
                <li
                    className={`complete-${item.complete.toString()}`}
                    key={item._id}
                >
                    <span onClick={() => props.handleComplete(item._id)}>
                        {item.text}
                    </span>
                </li>
            ))
            }
        </ul>
    )
}