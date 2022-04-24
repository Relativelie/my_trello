import * as listOfTasksActionCreators from './listOfTasksActions';
import * as inputFieldCreators from './inputFieldActions';
import * as tasksActionCreators from './tasksActions';

export default {
    ...listOfTasksActionCreators,
    ...inputFieldCreators,
    ...tasksActionCreators,
};
