import React, { useState }  from 'react';

function NewTodoForm(props){

    const [description,setDescription] = useState('')
    const [assigned,setAssigned] = useState('')

    // const descriptionChange = (event)=>{
    //     setDescription(event.target.value);
    // }
    
    // const assignedChange = (event)=>{
    //     setAssigned(event.target.value);
    // }

    const submitTodo = () => {
        if( description == ''){
            alert('Description not empty !!!');
        }else if( assigned == ''){
            alert('Assigned not empty !!!');
        }else{
            props.addTodo(description,assigned);
            setAssigned('');
            setDescription('');
        }
    }

    return (
        <div className='mt-5'> 
            <form id='form-todo'>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input
                        id='assigned' 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={event => setAssigned(event.target.value)}
                        value  = {assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea                        
                        id='description'
                        className='form-control' 
                        rows={3} required
                        // onChange : theo dõi sự thay đổi của dữ liệu để xử lý state
                        // event : đại diện sự kiện người dùng nhập dữ liệu 
                        //setDescription(event.target.value) : update giá trị của state
                        onChange={event => setDescription(event.target.value)}
                        value = {description}
                    ></textarea>
                </div>
                <button onClick={submitTodo} type='button' className='btn btn-primary'>Add todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;