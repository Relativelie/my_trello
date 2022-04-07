import * as listOfTasksActionCreators from './listOfTasksActions';
import * as commonActionCreators from './commonActions';
import * as tasksActionCreators from './tasksActions';


export default {
    ...listOfTasksActionCreators,
    ...commonActionCreators,
    ...tasksActionCreators
}