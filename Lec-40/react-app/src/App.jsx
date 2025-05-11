import Footer from "./components/Footer"
import Header from "./components/Header"
import NewPerson from "./components/NewPerson"
import Person from "./components/Person"

const App = () => {

  const isValid = false;
  // let output = "";

  // if(isValid){
  //   output = "green";
  // }else{
  //   output = "red";
  // }

  const personData = [
    {
      fullname: "Rahul",
      age: 34,
      profession: "SDE-2"
    },
    {
      fullname: "Varun",
      age: 14,
      profession: "Trainee"
    },
    {
      fullname: "Abhishek",
      age: 20,
      profession: "SDE-1"
    }

  ]

  const todos = [
    "Buy Groceries",
    "Go to Gym",
    "Learn React",
    "Learn JS"
  ]

  return (
    <div>
      {/* <Header></Header> */}
      {/* <Header/> */}
      {/* <Footer/> */}

      {/* <Person name={"Rahul"} age={34} profession={"SDE-2"}/>
      <Person name={"Varun"} age={14} profession={"Trainee"}/>
      <Person name={"Abhishek"} age={20} profession={"SDE-1"}/> */}

      {/* <NewPerson person={personData[0]} />
      <NewPerson person={personData[1]} />
      <NewPerson person={personData[2]} /> */}

      {/* --------------------------------- rendering a list */}
      {/* <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>

      <div>
        { personData.map((person, ind) => <NewPerson person={person}/>) }
      </div> */}

      {/* {isValid === true ? "green": "red"} */}

      {isValid ? <ul>
        { todos.map(todo => <li>{todo}</li>)}
      </ul> : <div>
        { personData.map((person, ind) => <NewPerson person={person}/>) }
      </div>}


    </div>
  )
}

export default App