import React, { Component } from "react";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
      <FlipMove duration={250} easing="ease-out"> 
          {listItems}
          </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;