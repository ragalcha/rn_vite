import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [rnLove, setRnLove] = useState([])
  useEffect(() => {
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: jsonString
    // };
    const dataToUpdate = {
      userName: "ramaiya01",
      email: "ramaiya@gmail.com",
      password: "rn@123"
    };
    // fetching api from usign axios

    axios.post('https://rn-kiffu-toka.onrender.com/api/rn/user/login',dataToUpdate)
      .then((res) => {
        setRnLove(res.data);
        console.log("API data from server", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetching api from using fetch
    // const jsonString = JSON.stringify(dataToUpdate);

    // fetch('https://rn-kiffu-toka.onrender.com/api/rn/user/login',options).then((res) => {
    //   return res.json()
    // }).then((data) => {
    //   setRnLove(data);
    //   console.log("hello i am rn api", data);
    // }).catch((err) => { console.log("i am error",err) })
    });

  return (
    <div className='container'>
      <div className="row">
        <div className="col-6 offset-3 ">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{rnLove.mylove}</h5>
              <p className="card-text">{rnLove.iLoveHer}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
