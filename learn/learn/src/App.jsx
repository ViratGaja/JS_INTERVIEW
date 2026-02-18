import { useState } from "react"
import './App.css'

function App() {

  // const [word,setWord]=useState(false);
  // const [count,setCount]=useState(0)


  // const show=()=>{
  //   setWord(pre=>!pre)
  // }


  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(null)
  const [data, setData] = useState([])

  const handle = (e) => {
    e.preventDefault();

    if (edit) {

      const final_resutlt=data.map(data=>data.id===edit?{...data,name,age}:data);
      setData(final_resutlt);

    }
    else {
      setData([...data, { id: Date.now(), name, age }]);
    }



    setAge("");
    setName("")
  };

  const handle_edit = (data) => {
    setName(data.name);
    setAge(data.age);
    setEdit(data.id)

  }

  const remove = (id) => {
    const remove_final = data.filter(b => b.id !== id);
    setData(remove_final)
  }


  return (
    <>

      {/* <button onClick={show}>Toggle Button</button>

    {word&&<p>SHowing the content</p>}


    <button onClick={()=> setCount(count=>count+1)} >Like</button>
    <button onClick={()=> setCount(count=>count-1)} >Dislike</button>
    <button onClick={()=>setCount(0)}>reset</button>

    <h1>Like count :{count}</h1> */}

      <div className="curd">
        <h2>Curd Operation</h2>

        <form onSubmit={handle}>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" value={name} />
          <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="Age" value={age} />

          <button type="submit">{edit?"Update":"Submit"}</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
            <td>King</td>
            <td>29</td>
            <td></td>
          </tr> */}
            {data.map(data => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td><button onClick={() => handle_edit(data)} >edit</button> <button onClick={() => remove(data.id)}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>







    </>
  )
}

export default App