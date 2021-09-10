import { ButtonContext } from './createContext';    //引入

import React, { Component } from 'react';

class Children extends Component {

  render() {
    return (
      <div>

 　　  <ButtonContext.Consumer> 　　
　　       {value=>console.log("context",value)}       //这里打印下看这个value，记得使用时候要return　
　　　 </ButtonContext.Consumer>

   </div>  );
 } } 
export default Children;
