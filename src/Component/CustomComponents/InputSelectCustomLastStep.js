import React from 'react';

const InputSelectCustomLastStep = ({ options, value, onChange }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <select value={value} onChange={handleChange} className='text_field_input'>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default InputSelectCustomLastStep;
