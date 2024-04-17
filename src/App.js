import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {
//todos : giá trị hiện tại của state
//setTodos : hàm cập nhật giá trị state
  const [todos,setTodos] = useState([
    { rowNumber :1, rowDescription:'Buggy', rowAssigned:'User one'},
    { rowNumber :2, rowDescription:'Teddy', rowAssigned:'User two'},
    { rowNumber :3, rowDescription:'Tommy', rowAssigned:'User three'},
    { rowNumber :4, rowDescription:'Jerry', rowAssigned:'User four'}
  ])

  const addTodo = (description,assigned)=>{
    let rowNumber = 0;
    if(todos.length > 0){
       rowNumber = todos[todos.length -1].rowNumber +1 ;
    }else{
      rowNumber =1 ;
    }
      const newtodos = {
        rowNumber : rowNumber,
        rowDescription : description,
        rowAssigned : assigned,
      }
      // push: thêm phần tử vào cuối mảng và trả về kích thước mới
      //state : chỉ so sánh tham chiếu của state trước đó
      // => phải tạo ra 1 bản sao mới của mảng để so sánh
      // todos=>[...todos,newtodos] : trả về 1 mảng mới
      setTodos((todos)=>[...todos, newtodos]);
      //reset form về trạng thái ban đầu
    }

    const deleteTodo = (deleteTodoRowNumber) =>{
      // filter : tạo ra 1 mảng mới
      // value : phần tử của todos
      let filtered = todos.filter( (value) =>{
          return value.rowNumber !== deleteTodoRowNumber;
      })
      setTodos(filtered)
    }
    
    const [showNewTodoForm,setShowNewTodoForm] = useState(false)

  return (
      <div className='mt-5 container'> {/* container: cố định kích thước ,căn giữa */}
        <div className='card'>
          <div className='card-header'>Your todos </div>
          <div className='card-body'>
            <TodoTable
                todos={todos}
                deleteTodo={deleteTodo}
            />
            <button
            // Click => giá trị show bị đảo = true 
             onClick={()=>setShowNewTodoForm(!showNewTodoForm)}
             className='btn btn-primary'
             >
              { showNewTodoForm? 'Close NewTodo': 'Open NewTodo'}
            </button>

            {/** nếu đúng thì render ra <NewTodoForm/> */}
            {
              showNewTodoForm &&
              <NewTodoForm addTodo = {addTodo}/>
            }
            
          </div>
        </div>
      </div>
  );

}

export default App;
