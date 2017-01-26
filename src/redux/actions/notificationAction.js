import uuid from 'uuid';

export const ADD_NOTIFICATION = 'NOTIFICATION/add-notification';
export const REMOVE_NOTIFICATION = 'NOTIFICATION/remove-notification';

export function addNotification(intent, message, duration = 3000){
    return dispatch => {
        const notificationId = uuid.v4();
        dispatch({
            type: ADD_NOTIFICATION,
            id: notificationId,
            message,
            intent
        });
        setTimeout(() => {
            dispatch({
                type: REMOVE_NOTIFICATION,
                notificationId
            })
        }, duration);
    }
}

export default {addNotification}
