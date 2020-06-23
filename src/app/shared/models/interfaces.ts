export interface TODOItem {
  id: string;
  createdAt: string;
  modifiedAt: string;
  title: string;
  text: string;
  completed?: boolean;
}

export interface APIInterface {
  title: string;
  text: string;
}
