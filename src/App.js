import React,{useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import uuid from 'uuid';


function App() {

  const [items, setItems] = useState([]);
  const [values, setValues] = useState({
    id:uuid(),
    item:'',
    isEdited:false
  });

  let handleChange = e => (
      setValues({
        id:uuid(),
        item: e.target.value,
        isEdited:false
      })
    );
  let handleSubmit = e =>{
    e.preventDefault();
    const newItem ={
      id:values.id,
      item:values.item,
      isEdited:false
    };
    
    const updatedItems=[...items,newItem];
    setItems(updatedItems);
    setValues({
      id:uuid(),
      item: '',
      isEdited:false
    });
  };

  let clearList = () =>{ return(
    setItems([])
    )};

  let handleDelete = id => {
    const filteredItems = items.filter(item => item.id !==  id);
    setItems(filteredItems)
  }

  let handleEdit = id =>{
    const filteredItems = items.filter(item => item.id !==  id);
    const selectedItem = items.find(item => item.id === id)
    setItems(filteredItems)
    setValues({
      id:id,
      item:selectedItem.item,
      isEdited: true
    })

    document.getElementById("form").focus();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h1 className="text-capitalize text-center font-weight-bold">todo Input</h1>
          <TodoInput 
              item={values.item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isEdited ={values.isEdited}
            />
          <TodoList 
          items={items} 
          clear={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
