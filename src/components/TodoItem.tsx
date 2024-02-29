// src/components/TodoItem.tsx
import React from 'react';
import { List, Checkbox, Button } from 'antd';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
    onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
    return (
        <List.Item
            className="todo-item"
            actions={[
                <Checkbox checked={todo.completed} onChange={onToggle}>
                    {todo.completed ? 'Encerrado' : 'Pendente'}
                </Checkbox>,
                <Button danger onClick={onDelete}>Remover</Button>
            ]}
        >
            <span
                className="todo-item-text"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
            </span>
        </List.Item>
    );
};

export default TodoItem;
