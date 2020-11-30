import React from 'react';
import {rootState} from '../reducers';
import {FetchTodo, AddTodo, DeleteTodo, toggleTodo} from '../reducers/todos';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {returntypeof} from 'react-redux-typescript'
import {Todo} from '../model';
import Page from '../pages/Todo';
const mapStateToProps = (state: rootState) => (
  {
    todos: state.todos.todos
  }
)

const StateToPropsTypes = returntypeof(mapStateToProps);

const mapDispatchtoProps = (d: Dispatch) => (
  bindActionCreators(
    {
      FetchTodo,
      AddTodo,
      DeleteTodo,
      toggleTodo,
    }, d
  )
)

const DispatchToPropsTypes = returntypeof(mapDispatchtoProps);

export type Props = typeof StateToPropsTypes & typeof DispatchToPropsTypes & {}

class Container extends React.Component<Props> {
  constructor(props: Props){
    super(props);
  }
  componentDidMount() {
    const {FetchTodo} = this.props;
    const EXAMPLE: Todo[] = [
      {
        id: 0,
        content: '아침 산책',
        done: true,
      },
      {
        id: 1,
        content: '뉴스 읽기',
        done: false,
      }
    ];
    FetchTodo(EXAMPLE);
  }
  render() {
    
    return (
      <Page {...this.props}/>
    )
  }
}

const connectTodos = connect(mapStateToProps, mapDispatchtoProps)

export default connectTodos(Container)