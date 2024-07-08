import React from "react";
import CustomMultiSelect from "./CustomMultiSelect";
import InputSelectCustom from "./InputSelectCustom";

const AmenitiesSection = ({
    amenities,
    amenitySelection,
    handleAmenityToggle,
    handleAmenityOptionChange,
    handleMultiSelectChange,
    formData,
}) => {
    return (
        <div className="amenities_right_sec_parent">
            {amenities.map((amenity) => (
                <div key={amenity.name} className="amenities_right_sec_child">
                    <div className="d_flex justify_content_between align_items_center">
                        <p>{amenity.name}</p>
                        <div className="d_flex flex_gap_10">
                            <button
                                type="button"
                                className={
                                    amenitySelection[amenity.name]?.showDetails
                                        ? "primary_switch_btn selected_btn"
                                        : "secondary_switch_btn not_selected_btn"
                                }
                                onClick={() => handleAmenityToggle(amenity.name, true)}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className={
                                    !amenitySelection[amenity.name]?.showDetails
                                        ? "primary_switch_btn selected_btn"
                                        : "secondary_switch_btn not_selected_btn"
                                }
                                onClick={() => handleAmenityToggle(amenity.name, false)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    {amenitySelection[amenity.name]?.showDetails && (
                        <>
                            {amenity.options && (
                                <InputSelectCustom
                                    options={[
                                        { label: "Select Option", value: "" },
                                        ...amenity.options.map((option) => ({
                                            label: option,
                                            value: option,
                                        })),
                                    ]}
                                    value={amenitySelection[amenity.name]?.selectedOption || ''}
                                    onChange={(selectedOption) =>
                                        handleAmenityOptionChange(amenity.name, selectedOption.target.value) // Ensure correct event handling
                                    }
                                />
                            )}
                            {amenity.options &&
                                amenity.multiSelectOptions &&
                                amenity.multiSelectOptions.length > 0 &&
                                amenitySelection[amenity.name]?.selectedOption && (
                                    <CustomMultiSelect
                                        options={amenity.multiSelectOptions.map((option) => ({
                                            label: option,
                                            value: option,
                                        }))}
                                        name={`${amenity.name}_multi`}
                                        value={formData[amenity.name] || []}
                                        onChange={(selectedOptions) =>
                                            handleMultiSelectChange(amenity.name, selectedOptions)
                                        }
                                    />
                                )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AmenitiesSection;
