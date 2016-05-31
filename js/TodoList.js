var React=require('react');
var ReactDOM=require('react-dom');
var ListTodo=require('./ListTodo');
var TypeNew=require('./TypeNew');


var TodoList=React.createClass({
    getInitialState:function(){
        return{
            todolist:[]
        }
    },
    handleChange:function(rows){
        this.setState({
            todolist:rows
        })
    },
    render: function(){
        return (
            <div>
                <TypeNew todo={this.state.todolist} onAdd={this.handleChange}/>

                <ListTodo todo={this.state.todolist} onDel={this.handleChange}/>

            </div>
            );
    }
});


ReactDOM.render(<TodoList />,document.getElementById('container'));