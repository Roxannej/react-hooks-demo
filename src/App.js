import * as React from 'react';

// import useInterval from './Hooks/useInterval.ts';
// import useBoolean from './Hooks/useBoolean.ts';

const Start = () => {
  const [count, dispath] = React.useReducer((state,action)=> {
        if(action === 'add'){
          console.log('state',state)
            return state + 1;
        }
        return state;
    },0);
    return (
        <div>
            <h1 className="title">{count}</h1>
            <button className="btn is-primary"
                onClick={()=> dispath('add')}
                >Increment</button>
        </div>
    )
};
export default Start;
