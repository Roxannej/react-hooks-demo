import React from "react";
import FormComp from './Demo.js'
import 'antd/dist/antd.css';
import Father from './components/usecontext/father'
import Children from './components/usecontext/ThemeButton'
function App() {
  return (
    <div className="App">
      <Children />
      <Father value={333} >4444</Father>
    </div>
  );
}
export default App;
