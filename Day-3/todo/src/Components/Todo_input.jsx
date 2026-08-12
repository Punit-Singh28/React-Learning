import React from 'react'

export const Todo_input = ({ props }) => {
    const [text, setText] = React.useState('');

    const handleAdd = () => {
        const todo = {
            id: Date.now(),
            text: text,
            isEdits: false,
            isCompleted: false
        };
        props((prev) => [...prev, todo]);
        console.log(props);
        
        setText('');
    };

    const SelectAll = () => {
        props((prev) => prev.map(todo => ({
            ...todo,
            isCompleted: true
        })));
    };

    const handleDeleteAll = () => {
        props((prev) => prev.filter(todo => !todo.isCompleted));
    };

      const handleDeSelectAll = () => {
  props((prev)=> prev.map(todo => ({...todo,
    isCompleted: false}
  )));
};

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
            <input
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            {/* {isCompleted} */}
            <button onClick={handleAdd}>Add</button>
           {/* { console.log(this.todo) } */}
            
           
            <button onClick={SelectAll}>Select All</button> 
            <button onClick={handleDeleteAll}>Delete All</button>
            <button onClick={handleDeSelectAll}>De-Select All</button>
            {/* <h1>{isCompleted ? "Welcome back!" : "Please log in."}</h1> */}
             {/* {props.length > 0 && (
                <>
                    <button onClick={SelectAll}>Select All</button>
                    </>)} */}
        </div>
    );
};
