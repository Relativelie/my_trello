class TaskEntity {
  name: string;
  subtasks: string[];

  constructor(name: string, subtasks: string[] = []) {
    this.name = name;
    this.subtasks = subtasks;
  }

  static create(): TaskEntity {
    const name = 'Write the name of the task';
    return new TaskEntity(name, []);
  }

  static addSubtask(task: TaskEntity, subtask: string): TaskEntity {
    const newSubtasks = [...task.subtasks, subtask];
    return new TaskEntity(task.name, newSubtasks);
  }

  static renameTask(task: TaskEntity, name: string): TaskEntity {
    return new TaskEntity(name, task.subtasks);
  }

  static renameSubtask(
    task: TaskEntity,
    name: string,
    taskIndex: number,
  ): TaskEntity {
    const newSubtasks = [...task.subtasks];
    newSubtasks[taskIndex] = name;

    return new TaskEntity(task.name, newSubtasks);
  }

  static removeSubtask(task: TaskEntity, subtaskIndex: number): TaskEntity {
    const newSubtasks = [...task.subtasks];
    newSubtasks.splice(subtaskIndex, 1);

    return new TaskEntity(task.name, newSubtasks);
  }

  static dragDropSubtask(
    task: TaskEntity,
    toIndex: number,
    fromIndex: number,
  ): TaskEntity {
    const newSubtasks = [...task.subtasks];
    const [removed] = newSubtasks.splice(fromIndex, 1);
    newSubtasks.splice(toIndex, 0, removed);

    return new TaskEntity(task.name, newSubtasks);
  }
}

export default TaskEntity;
