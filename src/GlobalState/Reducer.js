const initialState = {
    food: [],
    entertainment: [],
    travel: []
}

const reducerFunction = (state, action) => {
    console.log("action", action)
    switch (action.type) {
        case 'food': {
            if (action.bool) {
                localStorage.setItem("data", JSON.stringify({
                    ...state,
                    food: [...state.food, action.payload]
                }));
            }
            return {
                ...state,
                food: [...state.food, action.payload]
            }
        }
        case 'entertainment': {
            if (action.bool) {
                localStorage.setItem("data", JSON.stringify({
                    ...state,
                    entertainment: [...state.entertainment, action.payload]
                }));
            }
            return {
                ...state,
                entertainment: [...state.entertainment, action.payload]
            }
        }
        case 'travel': {
            if (action.bool) {

                localStorage.setItem("data", JSON.stringify({
                    ...state,
                    travel: [...state.travel, action.payload]
                }));
            }
            return {
                ...state,
                travel: [...state.travel, action.payload]
            }
        }
        default:
            return state;
    }
}

function addExpense(type, payload, dispatch, state, enqueueSnackbar, setData, setShow, balance, setBalance, expense, setExpense) {
    if (payload.title && parseInt(payload.price) && payload.category && payload.category != 'DEFAULT' && payload.date) {
        if (balance >= +expense + parseInt(payload.price)) {
            dispatch({
                type: type,
                payload: payload,
                bool: true
            })
            setData(prev => ({
                title: "",
                price: "",
                category: "DEFAULT",
                date: "",
            }))
            enqueueSnackbar("Expense added successfully", {
                autoHideDuration: 2000,
                variant: "success",
            })
            setShow(prev => !prev)
            setBalance(prev => prev - payload.price)
            localStorage.setItem('balance', balance - payload.price)
            setExpense(prev => prev + parseInt(payload.price))
        } else {
            enqueueSnackbar("Expense greater than balance", {
                autoHideDuration: 2000,
                variant: "error",
            })
        }

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

function handleGetLocalStorage(setExpense, setBalance, balance, dispatch) {
    if (JSON.parse(localStorage.getItem("data"))) {
        let result = 0,
            arr = Object.values(JSON.parse(localStorage.getItem("data")));
        arr.forEach((i) => {
            if (i?.length > 0) {
                i.forEach((ele) => {
                    result += parseInt(ele.price)
                    dispatch({
                        type: ele.category,
                        payload: ele,
                        bool: false
                    })
                })
            }
        });
        setExpense(result);
        if (localStorage.getItem('balance')) {
            setBalance(localStorage.getItem('balance') - result);
        } else {
            setBalance(balance - result)
        }
    }
}
export {
    initialState,
    reducerFunction,
    addExpense,
    handleGetLocalStorage
}