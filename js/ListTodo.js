var React=require('react');
var ReactDom=require('react-dom');

var ListTodo=React.createClass({
    handleDel:function(e){
        var delIndex=e.target.getAttribute('data-key');
        this.props.todo.splice(delIndex,1);
        this.props.onDel(this.props.todo);
    },
    render:function(){
        return(
            <ul id="todo-list">
            {
                this.props.todo.map(function(item,i){
                    return(
                        <li>
                            <lable>{item}</lable>
                            <button class="destroy" onClick={this.handleDel} data-key={i}>
                            delete
                            </button>
                        </li>
                        );
                }.bind(this))
            }
            </ul>
            );
    }
});

module.exports=ListTodo;