import { Component } from "react";

import CardList from "./Cardlist";
import Scroll from "./Scroll";
// import { robotName } from "./robot_model";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robotName: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
        users => {
            return users.json();
        }
    ).then(
        users => {
            this.setState({robotName: users})
            console.log(users.target)
        }
    )
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(users => {
    //    return users.json();
    //   })
    //   .then(this.setState({ robotName: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  };
  render() {
    const filteredRobotList = this.state.robotName.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    // console.log(filteredRobotList.target.value)
    if(filteredRobotList.length === 0){
        return <div className="tc">
            <h1 className="">RoboFriend</h1>
              <input
                placeholder="search"
                onChange={this.onSearchChange}
                className="br3 bg-light-green mb3 pa2"
              ></input>
            <h1>Search result is empty</h1>
        </div>
    }else{
        return (
            <div className="tc">
              <h1 className="">RoboFriend</h1>
              <input
                placeholder="search"
                onChange={this.onSearchChange}
                className="br3 bg-light-green mb3 pa2"
              ></input>
              <Scroll>
                    <CardList robotName={filteredRobotList} />
              </Scroll>
            </div>
          );
    }
  }
}

export default App;