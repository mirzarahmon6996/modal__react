import "./App.css";
import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState(true);
  const [closeBtn, setCloseBtn] = useState(true);

  function openModal() {
    setModal(!modal);
  }

  function closeBtnModal() {
    setModal(!closeBtn);
  }

  console.log(modal);

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
    </>
  );
}

export default App;
