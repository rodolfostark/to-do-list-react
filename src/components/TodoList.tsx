// src/components/TodoList.tsx
import React from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
    return (
        <List
            className="todo-list"
            dataSource={todos}
            renderItem={(todo) => (
                <TodoItem
                    todo={todo}
                    onDelete={() => onDelete(todo.id)}
                    onToggle={() => onToggle(todo.id)}
                />
            )}
        />
    );
};

export default TodoList;
