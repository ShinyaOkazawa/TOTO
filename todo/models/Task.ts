export interface TaskType {
  _id: string;
  name: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Task {
  _id: string = "";
  name: string = "";
  isCompleted: boolean = false;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
