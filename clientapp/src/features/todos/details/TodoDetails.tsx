import format from "date-fns/esm/format";
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { DATETIMEWHENFMT } from "../../../app/common/options/Constants";
import { Todo } from "../../../app/layout/models/Todo";

interface Props {
  selectedTodo: Todo;
  handleCancelSelectTodo: () => void;
  handleFormOpen: (id: string) => void;
}

export default function TodoList({
  selectedTodo,
  handleCancelSelectTodo,
  handleFormOpen,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/${selectedTodo.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{selectedTodo.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            Due Date: {format(new Date(selectedTodo.dateDue), DATETIMEWHENFMT)}
          </span>
        </Card.Meta>
        <Card.Description>{selectedTodo.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => handleFormOpen(selectedTodo.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={handleCancelSelectTodo}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
