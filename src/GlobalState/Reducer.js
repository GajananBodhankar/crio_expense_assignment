const initialState = {
    food: [],
    entertainment: [],
    travel: []
}

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'food': {
            return {
                ...state,
                food: [...state.food, action.payload]
            }
        }
        case 'entertainment': {
            return {
                ...state,
                entertainment: [...state.entertainment, action.payload]
            }
        }
        case 'travel': {
            return {
                ...state,
                travel: [...state.travel, action.payload]
            }
        }
    }
}

function addExpense(type, payload, dispatch, state, enqueueSnackbar) {
    if (payload.title && parseInt(payload.price) && payload.category && payload.category != 'DEFAULT' && payload.date) {
        dispatch({
            type: type,
            payload: payload
        })
    } else if (!parseInt(payload.price)) {
        enqueueSnackbar("Price must be a number", {
            autoHideDuration: 2000,
            variant: "error",
        })
    } else {
        enqueueSnackbar("Please enter all details", {
            autoHideDuration: 2000,
            variant: "error",
        })
    }
}

export {
    initialState,
    reducerFunction,
    addExpense
}