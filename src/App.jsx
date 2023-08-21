import "./App.css";
import { useState } from "react";
function App() {
  // const [name, setName] = useState("Sanjar");
  // function changeName() {
  //   if (name == "Sanjar") {
  //     setName("Ulugbek");
  //   } else {
  //     setName("Sanjar");
  //   }
  // }

  // const [rendem, setRendem] = useState(0);
  // function changeRendem() {
  //   setRendem(Math.floor(Math.random() * 100));
  // }

  // const [count, setCount] = useState(1);
  // function RenderCount() {
  //   setCount(count + 1);
  // }
  const [modal, setModal] = useState(true);
  function OpenModal() {
    if (modal == true) {
      setModal(false);
    } else {
      setModal(true);
    }
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
      </div>
      <button className="btn" onClick={OpenModal}>Click</button>
    </>
  );
}

export default App;
