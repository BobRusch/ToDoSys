export interface Todo {
  id: string;
  title: string;
  description: string;
  category: string;
  dateCreated: string;
  dateDue: string;
  lastUpdated: string;
  status: string;
  parent: boolean;
  priority: string;
  subToDoId: string;
}
