// src/App.tsx
import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const { Header, Content } = Layout;
const { Title } = Typography;

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Layout className="container">
      <Header className="todo-list-header">
        <Title level={2} style={{ color: 'white' }}>Todo List</Title>
      </Header>
      <Content style={{ padding: '24px' }}>
        <AddTodo onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </Content>
    </Layout>
  );
};

export default App;
