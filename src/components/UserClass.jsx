import React from "react";
import UserContext from "../utils/UserContext.js";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, city } = this.props;
    const { count } = this.state;
    const userStyle = {
      background: "aquawhite",
      border: "1px solid black",
    };

    return (
      <div style={userStyle}>
        <h1>Hello I am {name} </h1>
        <h2>Hello I am from {city} </h2>
        <p>{count}</p>
        <div>
          <UserContext.Consumer>
            {(data) => <p>{data.loggedInUser}</p>}
          </UserContext.Consumer>
        </div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default UserClass;
