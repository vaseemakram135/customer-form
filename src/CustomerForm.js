import React, { useState, useEffect } from "react";

const cities = ["Select City", "New York", "London", "Tokyo"];

const CustomerForm = ({ saveData, editIndex, formData }) => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [city, setCity] = useState("Select City");
  const [gender, setGender] = useState("Male");

  useEffect(() => {
    if (editIndex !== null) {
      const editingData = formData[editIndex];
      setName(editingData.name);
      setEmployeeId(editingData.employeeId);
      setCity(editingData.city);
    }
  }, [editIndex, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !employeeId || city === "Select City" || !gender) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    saveData({ name, employeeId, city, gender });
    setName("");
    setEmployeeId("");
    setCity("Select City");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center"> Customer Information </h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeeId" className="form-label">
          Employee ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeId"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <select
          className="form-control"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          {cities.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Gender:</label> <br />
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            id="male"
            value="Male"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            id="female"
            value="Female"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
            required
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default CustomerForm;
