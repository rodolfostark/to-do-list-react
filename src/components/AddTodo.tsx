// src/components/AddTodo.tsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface AddTodoProps {
    onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            onAdd(inputValue);
            setInputValue('');
        }
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <Input
                placeholder="Digite uma nova tarefa"
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: '70%', marginRight: '8px' }}
            />
            <Button type="primary" onClick={handleAddTodo}>
                Adicionar
            </Button>
        </div>
    );
};

export default AddTodo;
