export interface TODOItem {
  id: number;
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
