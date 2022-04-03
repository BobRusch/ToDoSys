import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import NavBar from "../../features/Navbar/NavBar";
import axios from "axios";
import { Todo } from "./models/Todo";
import TodosDashboard from "../../features/todos/dashboard/TodosDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Todo[]>("http://localhost:5000/api/ToDos")
      .then((response) => setTodos(response.data));
  }, []);

  function handleSelectTodo(id: string) {
    setSelectedTodo(todos.find((x) => x.id === id));
  }

  function handleCancelSelectTodo() {
    setSelectedTodo(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectTodo(id) : handleCancelSelectTodo();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditTodo(todo: Todo) {
    todo.id
      ? setTodos([...todos.filter((x) => x.id !== todo.id), todo])
      : setTodos([...todos, { ...todo, id: uuid() }]);
    setEditMode(false);
    setSelectedTodo(todo);
  }

  function handleDeleteTodo(id: string) {
    setTodos([...todos.filter((x) => x.id !== id)]);
  }

  return (
    <>
      <NavBar handleFormOpen={handleFormOpen} />
      <Container>
        <TodosDashboard
          todos={todos}
          selectedTodo={selectedTodo!}
          handleSelectTodo={handleSelectTodo}
          handleCancelSelectTodo={handleCancelSelectTodo}
          editMode={editMode}
          handleFormOpen={handleFormOpen}
          handleFormClose={handleFormClose}
          handleCreateOrEditTodo={handleCreateOrEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </Container>
    </>
  );
}

export default App;
