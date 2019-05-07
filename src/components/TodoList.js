import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (<div>
        <h1>Hello From TodoList</h1>
        <Item/>
        </div>
    )
  }
}
