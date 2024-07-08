// CustomMultiSelect.js
import React, { useState, useRef, useEffect } from 'react';

const CustomMultiSelect = ({ options, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveSelected = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select" ref={dropdownRef}>
      <div className="multi-select__control" onClick={toggleDropdown}>
        <div className="multi-select__value-container">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => (
              <div key={option.value} className="multi-select__tag">
                <p>{option.label}</p>
                <span
                  className="multi-select__tag__remove"
                  onClick={() => handleRemoveSelected(option)}
                >
                  ×
                </span>
              </div>
            ))
          ) : (
            <div className="multi-select__placeholder">{placeholder}</div>
          )}
        </div>
        <div className="multi-select__arrow">&#9662;</div>
      </div>
      {isDropdownOpen && (
        <div className="multi-select__menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`multi-select__option ${selectedOptions.includes(option) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
              />
             <p>{option.label}</p> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
