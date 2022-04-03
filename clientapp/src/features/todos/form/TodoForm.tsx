import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Todo } from "../../../app/layout/models/Todo";

type Props = {
  selectedTodo: Todo | undefined;
  handleFormClose: () => void;
  handleCreateOrEditTodo: (todo: Todo) => void;
};

function TodoForm({
  selectedTodo,
  handleFormClose,
  handleCreateOrEditTodo,
}: Props) {
  const initialState = selectedTodo ?? {
    id: "",
    title: "",
    description: "",
    category: "",
    dateCreated: "",
    dateDue: "",
    lastUpdated: "",
    status: "",
    parent: false,
    priority: "",
    subToDoId: "",
  };

  const [todo, setTodo] = useState(initialState);

  function handleSubmit() {
    handleCreateOrEditTodo(todo);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={todo.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={todo.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Priority"
          value={todo.priority}
          name="priority"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Description"
          value={todo.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Due Date"
          value={todo.dateDue}
          name="dateDue"
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={handleFormClose}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

export default TodoForm;
