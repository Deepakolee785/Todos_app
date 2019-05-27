import React from 'react';
import './style.css';
function TodoInput(props) {
	const {item, handleChange, handleSubmit,isEdited} = props;
  return (
    <div className="main card card-body my-3">
    	<form onSubmit={handleSubmit}>
    		<div className="input-group">
    			<div className="input-group-prepend">
    				<div className="input-group-text bg-primary text-white">
    						<i class="fas fa-th-list"></i>
    				</div>
    			</div>
    			<input 
    				id="form"
	    			type="text" 
	    			className="form-control"
	    			placeholder="Add a todo item"
	    			value={item}
	    			onChange={handleChange}
	    			/>
	    			
    		</div>
    		<button className='btn btn-success float-right btn-right mt-3'>
	    		{isEdited ? 'Edit Item' : 'Add Item'}
    		</button>
    	</form>
    </div>
  );
}

export default TodoInput;