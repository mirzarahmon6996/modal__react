import "./App.css";
import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  function openModal() {
    setModal(!modal);
  }

  function closeBtnModal() {
    setModal(!closeBtn);
  }

  console.log(modal);

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className={modal ? "active" : "actives"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        officiis magnam labore reprehenderit facere unde cumque sequi itaque,
        corporis quam eum nisi accusamus deleniti fugiat neque eveniet
        consectetur veniam sapiente consequatur autem, quibusdam explicabo
        minima quae. Asperiores cupiditate nobis deleniti quos porro, cumque,
        aliquam voluptatibus eos blanditiis sapiente distinctio commodi cum hic
        ipsum ducimus obcaecati tempore nostrum quam autem aut beatae!
        Consequuntur, rem! Culpa esse sit, incidunt non explicabo eum eos
        commodi quas laboriosam, quos delectus dolore nisi necessitatibus! Neque
        tempore necessitatibus ratione mollitia commodi quaerat aliquam aperiam
        voluptas magnam omnis, molestiae at, tempora ullam, libero temporibus
        aspernatur a optio!
        {closeBtn && (
          <button className="btn__X" onClick={closeBtnModal}>
            X
          </button>
        )}
      </div>
      <button className="btn" onClick={openModal}>
        Click
      </button>

      <div className="todo">
        <div className="todo__block">
          <div className="todo__wrapper">
            <form>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter the text"
              />
              <button onClick={handleAddTodo}>Add Todo</button>
            </form>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  id="btn__revome"
                  onClick={() => handleRemoveTodo(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
