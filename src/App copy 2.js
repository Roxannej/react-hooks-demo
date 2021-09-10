import React, {  useRef, useImperativeHandle } from "react";
const MyFunctionComponent = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <input ref={inputRef} />
  )
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus()
  }
  render() {
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
export default App;
