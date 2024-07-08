import React, { useState } from 'react';


const AmenityComponent = ({ titleName, required, value, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            onChange([...value, inputValue]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        const newValue = value.filter((_, i) => i !== index);
        onChange(newValue);
    };

    return (
        <div className="amenity_component">
           <div className="input_field_label_wrapper">
                <label className="input_field_label_text">
                    {titleName}
                    {required === true ? <span style={{ color: "red" }}> *</span> : ""}
                </label>
            </div>
            <input
                className="text_field_input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                required={required}
            />
            <div className="amenities_container">
                {value.map((amenity, index) => (
                    <div key={index} className="amenity">
                        {amenity} <span className="delete" onClick={() => handleDelete(index)}>×</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmenityComponent;
