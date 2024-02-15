import React from "react";

const DisplayData = ({ data, editData, deleteData }) => {
  return (
    <div>
      <h1 className="text-center"> Customer Data </h1>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>City</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.employeeId}</td>
              <td>{item.city}</td>
              <td>{item.gender}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editData(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteData(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
