import { createContext, useState, useReducer } from "react"
export const Context = createContext()

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
    const initialState = {
        count: 0
    };
    const reducerlogicFn = (state,action)=>{
        switch (action.type) {
            case "dec":
                state = {...state,["count"]:state.count-action.count}
                return state
            default:
                return state = {...state,["count"]:state.count+action.count} 
        }
    }
    const initTestReplaceOrAdd = {
        name:'jhon'
    }

    const [reduceState, reduceDispatch] = useReducer(reducerlogicFn,initialState)
    const [test,setTest] = useState(initTestReplaceOrAdd)
    const values = {
        reduceState,
        reduceDispatch,
        test,
        setTest
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}



// Change 1:
// ****************************************************
// ****************************************************
   // Reducer function to handle state updates
    // const reducer=(state, action)=> {
    //     switch (action.type) {
    //         case 'INCREMENT':
    //             return { ...state, count: state.count + 1 };
    //         case 'DECREMENT':
    //             return { ...state, count: state.count - 1 };
    //         default:
    //             return state;
    //     }
       
    // }

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'INCREMENT':
    //             return { ...state, count: state.count + 1 };
    //         case 'DECREMENT':
    //             return { ...state, count: state.count - 1 };
    //         default:
    //             return state;
    //     }
    // }
    // const [state, dispatch] = useReducer(reducer, initialState);