import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const {items, clear,handleDelete, handleEdit} = props;
  return (
    <ul className="list-group my-2">
    	<h2 className="text-capitalize text-center font-weight-bold">todo list</h2>
    	{
    		items.map(item => {
    			return <TodoItem 
    			key={item.id} 
    			title={item.item}
    			handleDelete={() => handleDelete(item.id)}
    			handleEdit={() => handleEdit(item.id)}
    			/>;
    	})	
    	}    		
    	
    	<button type="button" className="btn btn-danger btn-block text-capitalize my-4" onClick={clear}>Clear all</button>
    </ul>
  );
}

export default TodoList;

//<TodoItem key={item.id} title={item.item}/>