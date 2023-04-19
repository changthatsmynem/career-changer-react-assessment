import { useState, useEffect } from "react";

import "./assets/styles.css";

import Navbar from "./Navbar";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState(null);
  const [datas, setDatas] = useState(mockEmployees);
  const [newData, setNewData] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const handleUserClick = () => {
    setSector("User");
  };

  const handleAdminClick = () => {
    setSector("Admin");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateData = (e) => {
    e.preventDefault();
    const newId = datas.length;
    setDatas((prev) => [...prev, { id: newId, ...newData }]);

    //reset the form
    setNewData({
      name: "",
      lastname: "",
      position: "",
    });
  };

  const handleDelete = (index) => {
    const newDatas = [...datas];
    newDatas.splice(index, 1);
    setDatas(newDatas);
  };

  // const handleDelete = (id) => {
  //   setDatas(datas.filter((data) => data.id !== id));
  // };

  return (
    <div>
      <Navbar />
      <hr />
      <h1>Generation Thailand</h1>
      <h1>{sector ? `Home - ${sector} Sector` : "React - Assignment"}</h1>
      <div className="div-button">
        <button className="home-button" onClick={handleUserClick}>
          User Home Sector
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="home-button" onClick={handleAdminClick}>
          Admin Home Sector
        </button>
      </div>
      <br />
      <br />
      {sector === "User" && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {sector === "Admin" && (
        <div>
          <form onSubmit={handleCreateData}>
            <h3>Create User Here</h3>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={newData.name || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="lastname">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                value={newData.lastname || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="position">
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                value={newData.position || ""}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Save</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.lastname}</td>
                  <td>{data.position}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      styles={{ border: "none" }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
