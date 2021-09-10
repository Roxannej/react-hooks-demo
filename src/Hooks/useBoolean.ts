import { Reducer, useReducer } from 'react';

// debugger
const toggleReducer = (state: boolean, nextValue?: any) => {
  console.log('-',state, nextValue )
  return typeof nextValue === 'boolean' ? nextValue : !state
}

  
// console.log('-',nextValue)
  
  
  

const useBoolean = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useBoolean;