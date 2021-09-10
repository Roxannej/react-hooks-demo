import { ButtonContext } from './createContext';    //引入

import React, { Component } from 'react';
class Father extends Component {
 state:{

   choseType:'我是要传的值'

 }  
render() {    
     return (      
       <div>

　　　　<ButtonContext.Provider value={this.state.choseType}>
 　　　　 {this.props.children}
　　　　</ButtonContext.Provider>

      </div> 
   ); 
 }}
export default Father;
