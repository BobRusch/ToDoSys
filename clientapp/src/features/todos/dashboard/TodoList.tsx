import format from "date-fns/esm/format";
import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { DATETIMEWHENFMT } from "../../../app/common/options/Constants";
import { Todo } from "../../../app/layout/models/Todo";

interface Props {
  todos: Todo[];
  selectedTodo: Todo;
  handleSelectTodo: (id: string) => void;
  handleCancelSelectTodo: () => void;
  handleDeleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  selectedTodo,
  handleSelectTodo,
  handleCancelSelectTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {todos.map((todo) => (
          <Item key={todo.id}>
            <Item.Content>
              <Item.Header as="a">{todo.title}</Item.Header>
              <Item.Meta>
                {format(new Date(todo.dateDue), DATETIMEWHENFMT)}
              </Item.Meta>
              <Item.Description>
                <div>{todo.status}</div>
                <div>{todo.priority}</div>
                <div>{todo.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => handleSelectTodo(todo.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => handleDeleteTodo(todo.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={todo.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
