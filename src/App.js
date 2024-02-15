import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import DisplayData from "./DisplayData";

function App() {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const saveData = (data) => {
    if (editIndex !== null) {
      const updatedData = [...formData];
      updatedData[editIndex] = data;
      setFormData(updatedData);
      setEditIndex(null);
    } else {
      setFormData([...formData, data]);
    }
  };

  const editData = (index) => {
    setEditIndex(index);
  };

  const deleteData = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
    setEditIndex(null);
  };

  return (
    <div className="container mt-5">
      <CustomerForm
        saveData={saveData}
        editIndex={editIndex}
        formData={formData}
      />
      {formData.length > 0 ? (
        <DisplayData
          data={formData}
          editData={editData}
          deleteData={deleteData}
        />
      ) : (
        <div>
          <br />
          <div class="alert alert-warning text-center" role="alert">
            No data found.
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
