const initialState = 0;

const Number = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 5;
        case "DECREMENT": return state - 2;
        default: return state;

    }
}

export default Number;