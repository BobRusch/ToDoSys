import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import NavBar from "../Navbar/NavBar";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ToDos")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <Container>
      <NavBar />
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
