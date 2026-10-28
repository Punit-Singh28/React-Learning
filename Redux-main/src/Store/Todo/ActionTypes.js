//Action  -> Funtion's
import * as action from './Action'

export const todo_created = (value) => {
    return {
        type: action.TODO_CREATE,
        payload:{
            id: Date.now(),
            text: value,
            isEdit: false,
            isCompleted: false
        }
    }
    
};
export const todo_updated = () => {};
export const todo_deleted = () => {};
export const todo_completed = () => {};
