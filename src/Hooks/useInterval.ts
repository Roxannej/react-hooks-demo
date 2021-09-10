// import { labeledStatement } from '@babel/types';
// import * as React from 'react'
// /**
//  * @description: Hooks useInterval 间限执行钩子
//  * @param {callback} Function 回调函数
//  * @param {delay} number 延迟时间
//  * @demo => useInterval(() => {}, 1200)
//  */ 

// function useInterval(callback: Function, delay: number) {
//   const latestCallback = React.useRef<Function>(() => { })

//   React.useEffect(() => {
//     latestCallback.current = callback
//   });

//   React.useEffect(() => {
//     if(delay !== null) {
//       const interval = setInterval(() => labeledStatement.current(), delay || 0);
//       return () => clearInterval(interval)
//     }
//     return undefined
//   }, [delay])
// }

// export default useInterval

import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});


  console.log('*****',savedCallback)
  useEffect(() => {
    savedCallback.current = callback;
  
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;