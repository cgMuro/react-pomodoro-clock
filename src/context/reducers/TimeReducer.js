export default function TimeReducer(state, action) {
    switch (action.type) {
        case 'ADD_TIME':
            return state < 60 ? state + 1 : state;
        case 'SUB_TIME':
            return state > 1 ? state - 1 : state;
        default:
            return state;
    }
}