var React=require('react');
var ReactDom=require('react-dom');


var TypeNew=React.createClass({
    handleAdd:function(e){
        e.preventDefault();

        var inputDom=this.refs.inputnew;
        var newthing=inputDom.value.trim();

        var rows=this.props.todo;
        if(newthing!==''){
            rows.push(newthing);
            this.props.onAdd(rows);
        }
        inputDom.value='';
    },
    render:function(){
        return(
            <form onSubmit={this.handleAdd}>
              <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
            </form>
            );
    }
});


module.exports=TypeNew;