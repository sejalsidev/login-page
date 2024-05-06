import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { nanoid } from "nanoid";
import {} from "bootstrap";
import {} from "./Style.css";

const Login = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const uId = nanoid();
    setId(uId);
  }, [data]);

  const onClickButton = () => {
    if (email !== "" && password !== "") {
      const uId = nanoid();
      const newData = { id: uId, email, password };
      setData([...data, newData]);
      setEmail("");
      setPassword("");
     navigate(`/Component/Profile`, { state: { id: uId, data: [...data, newData] } });
    } else {
      console.log("error: email and password are required");
    }
  }

  const handleDelete = (index, e) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    e.preventDefault();
  };

  const updateHandler = (index) => (e) => {
    const { email: currentEmail, password: currentPassword } = data[index];
    setEmail(currentEmail);
    setPassword(currentPassword);
    setIsUpdateEnabled(true);
    setUpdateIndex(index);
    e.preventDefault();
  };

  const handleUpdate = (e) => {
    const newData = [...data];
    if (email !== "" && password !== "") {
      newData[updateIndex] = { ...newData[updateIndex], email, password };
      setData(newData);
      setEmail("");
      setPassword("");
      setIsUpdateEnabled(false);
      setUpdateIndex(null);
    } else {
      console.log("error: email and password are not updated");
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <span>Email ID</span>{" "}
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Enter Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    A valid email is required!
                  </div>
                </div>
                <div className="forms-inputs mb-4 ">
                  <span>Password</span>{" "}
                  <input
                    autoComplete="off"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Password must be 8 character!
                  </div>
                </div>
                {isUpdateEnabled ? (
                  <button
                    className="btn btn-dark w-25 p-2"
                    onClick={handleUpdate}
                    disabled={data.length === 0}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type=""
                    className="btn btn-dark w-25 p-2"
                    onClick={onClickButton}
                  >
                    Login
                  </button>
                  
                )}
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <div>
        <form>
          <center>
            <table className="table table-bordered table table-hover w-25 ">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>
                     {value.email}
                        
                  
                    </td>
                    <td>
                  
                        {value.password}
                      
              
                    </td>
                    <td>
                      <button onClick={(e) => handleDelete(index, e)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button onClick={updateHandler(index)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;