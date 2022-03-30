import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false,
}];

export const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hi</li>
                <li>World</li>
                <li>Hello</li>
            </ul>

        </div>
    );
};
