import React, { Component } from 'react';
const MyContext = React.createContext({
  nickname: 'kevin',
  level: 1,
  demo: 33333,
  demo3: 444,
});

function ProfileHeader() {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>用户昵称: {value.nickname}</h2>
              <h2>用户等级: {value.level}</h2>
              <h2>用户啊: {value.demo3}</h2>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}
// 函数组件不需要这步
// ProfileHeader.contextType = MyContext;

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <p>其他内容:</p>
      </div>
    );
  }
}

export default class ContextTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'jeff------',
      level: 9,
      demo3: 7777,
    };
  }

  render() {
    return (
      <div>
        <MyContext.Provider value={{ nickname: 'kevin', level: 99 }}>
          <MyContext.Provider
            value={{
              nickname: this.state.nickname,
              level: this.state.level,
              demo3: this.state.demo3,
            }}
          >
            <Profile />
          </MyContext.Provider>
        </MyContext.Provider>
        <p>----- 默认 -----</p>
        <Profile />
      </div>
    );
  }
}
