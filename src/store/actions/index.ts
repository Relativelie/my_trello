import * as listOfTasksActionCreators from './taskActions';
import * as inputFieldCreators from './inputFieldActions';
import * as tasksActionCreators from './subtaskActions';

export default {
  ...listOfTasksActionCreators,
  ...inputFieldCreators,
  ...tasksActionCreators,
};
