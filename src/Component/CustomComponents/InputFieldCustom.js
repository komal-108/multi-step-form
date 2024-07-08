import React from "react";
import "./InputFieldCustom.css";
const InputFieldCustom = ({
    titleName,
    name,
    onChange,
    value,
    type,
    placeholder,
    required,
    min,
    max,
    style,
}) => {
    return (
        <div className="input_field_parent">
            <div className="input_field_label_wrapper">
                <label className="input_field_label_text">
                    {titleName}
                    {required === true ? <span style={{ color: "red" }}> *</span> : ""}
                </label>
            </div>
         
                <input
                    style={style}
                    required={required}
                    className="text_field_input"
                    name={name}
                    onChange={onChange}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                ></input>
       
        </div>
    );
};

export default InputFieldCustom;
