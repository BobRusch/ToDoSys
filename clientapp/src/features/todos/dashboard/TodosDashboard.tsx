import React from "react";
import { Grid } from "semantic-ui-react";
import { Todo } from "../../../app/layout/models/Todo";
import TodoDetails from "../details/TodoDetails";
import TodoForm from "../form/TodoForm";
import TodoList from "./TodoList";

interface Props {
  todos: Todo[];
  selectedTodo: Todo;
  handleSelectTodo: (id: string) => void;
  handleCancelSelectTodo: () => void;
  editMode: boolean;
  handleFormOpen: (id: string) => void;
  handleFormClose: () => void;
  handleCreateOrEditTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: string) => void;
}

export default function TodosDashboard({
  todos,
  selectedTodo,
  handleSelectTodo,
  handleCancelSelectTodo,
  editMode,
  handleFormOpen,
  handleFormClose,
  handleCreateOrEditTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <Grid style={{ paddingTop: "80px" }}>
      <Grid.Column width="9">
        <TodoList
          todos={todos}
          selectedTodo={selectedTodo}
          handleSelectTodo={handleSelectTodo}
          handleCancelSelectTodo={handleCancelSelectTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </Grid.Column>
      <Grid.Column width="1">
        <div />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedTodo && !editMode && (
          <TodoDetails
            selectedTodo={selectedTodo}
            handleCancelSelectTodo={handleCancelSelectTodo}
            handleFormOpen={handleFormOpen}
          />
        )}
        {editMode && (
          <TodoForm
            selectedTodo={selectedTodo}
            handleFormClose={handleFormClose}
            handleCreateOrEditTodo={handleCreateOrEditTodo}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
