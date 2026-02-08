import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [data, setData] = useState([])
  const [edit, setEditId] = useState(null)


  const remove = (id) => {
    alert("Are you sure delete this data")
    const filter_data = data.filter(b => b.id !== id)
    setData(filter_data)



  }
  const edits = (a) => {
    setName(a.name);
    setAge(a.age);
    setEditId(a.id)
  }
  const submit = (e) => {
    e.preventDefault()

    if (edit) {
      const updataDate = data.map(item =>
        item.id === edit ? { ...item, name, age } : item
      )
      setData(updataDate);
      setEditId(null)
    }
    else {

      setData([...data, { id: Date.now(), name, age }])
    }



    setName("");
    setAge("");

  }
  return (
    <>
      <div className='curd'>


        <h1>CURD</h1>

        <form className='form' onSubmit={submit} action="">
          <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} className='name' />
          <input type="text" value={age} placeholder='Age' onChange={(e) => setAge(e.target.value)} className='age' />
          <button type='submit'> {edit ? "update" : "Submit"} </button>

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
              <td><button>Edit</button> <button>Delete</button></td>
            </tr> */}
            {data.map(a => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td><button onClick={() => edits(a)}>edit</button><button onClick={() => remove(a.id)} >delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
