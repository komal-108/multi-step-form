import React from 'react';

const InputSelectCustom = ({ options, required, name, value, titleName, onChange }) => (
  <div>
    <div className="input_field_label_wrapper">
      <label className="input_field_label_text">
        {titleName}
        {required && <span style={{ color: "red" }}> *</span>}
      </label>
    </div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="text_field_input"
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default InputSelectCustom;