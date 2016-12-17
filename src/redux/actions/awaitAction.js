export const AWAIT_RESET = 'await reset';

export function resetAwait(items) {
    return (dispatch)=> {
        dispatch({
            type: AWAIT_RESET,
            items: items
        });
    }
}

export default {
    resetAwait
}