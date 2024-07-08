import React from "react";

const FormDataTable = ({ formData }) => {
  const renderRoomCategories = () => {
    return formData.room_categories.map((category, index) => (
      <tr key={index}>
        <td>{category.room_category_name}</td>
        <td>{category.room_size}</td>
        <td>{category.total_rooms_in_category}</td>
        <td>{category.bed_type}</td>
        <td>{category.extra_bedding}</td>
        <td>{category.room_view}</td>
        <td>{category.max_adult}</td>
        <td>{category.max_child}</td>
        <td>{category.max_occupancy}</td>
      </tr>
    ));
  };

  return (
    <div className="form-data-table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Room Size</th>
            <th>Total Rooms</th>
            <th>Bed Type</th>
            <th>Extra Bedding</th>
            <th>Room View</th>
            <th>Max Adult</th>
            <th>Max Child</th>
            <th>Max Occupancy</th>
          </tr>
        </thead>
        <tbody className="table_body">{renderRoomCategories()}</tbody>
      </table>
    </div>
  );
};

export default FormDataTable;
