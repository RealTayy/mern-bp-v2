import React from 'react'

export const Store = React.createContext();

const initialState = {
  isTransitionLocked: false,
  loadScreenFinished: false,
  loadScreenTimeout:  { enter: 2000, exit: 2000 },
  pageTimeout:        { enter: 2000, exit: 2000 },
  activePage:         'Loading Screen'
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOCK_TRANSITION':     return { ...state, isTransitionLocked: action.payload };
    case 'SET_LOADSCREEN_FINISHED': return { ...state, loadScreenFinished: action.payload };
    case 'SET_ACTIVE_PAGE':         return { ...state, activePage: action.payload }
    // case 'ADD_ARRAY':     return { ...state, arrInState: [...state.arrInState, action.payload] };
    // case 'REMOVE_ARRAY':  return { ...state, arrInState: action.payload}
    default: return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // The above line is the same as:
  // const arr = React.useReducer(reducer, initialState);
  // const state = arr[0]
  // const dispact = arr[1]

  const value = { state, dispatch };
  // The above line is the same as:
  // const value = {
  //   state: state,
  //   dispatch: dispatch
  // }

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}