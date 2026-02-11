import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null)



  const remove = (id) => {
    const dydate_remove = data.filter(data => data.id !== id)
    setData(dydate_remove)
  }


  const rename = (a) => {
    setName(a.name);
    setEmail(a.email);
    setEdit(a.id)
  }

  const handle = (e) => {
    e.preventDefault();

    if (edit) {
      const final_edit = data.map(item => item.id === edit ? {...item, name, email} : item);
      setData(final_edit);
      setEdit(null)
    }
    else {

      setData([...data, { id: Date.now(), name, email }]);

    }
    setName("");
    setEmail("")
  }
  return (
    <>
      <div className='curd'>
        <h1>CURD OPERATION</h1>
        <form onSubmit={handle} action="">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='text' placeholder='Name' />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Age' name="" id="" />
          <button type='submit'>{edit?"update":"submit"}</button>

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

            {
              data.map((data => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td><button onClick={() => rename(data)}>edit</button> <button onClick={() => remove(data.id)} >delete</button></td>
                </tr>
              )))
            }
            </tbody>
        </table>
      </div>

    </>
  )
}

export default App
