// import React, { useEffect, useState } from "react";
// import AmenitiesSection from "../InputFieldCustom/AmenitiesSection";
// import InputSelectCustom from "../InputFieldCustom/InputSelectCustom";
// import InputSelectCustomLastStep from "../InputFieldCustom/InputFeildCustomLastStep";

// const FirstStep = ({
//     formData,
//     setFormData,
//     amenitySelection,
//     handleAmenityToggle,
//     handleAmenityOptionChange,
//     handleMultiSelectChange,
//     handleSidebarOptionChange,
//     selectedSidebarOption,
//     sidebarOptions,
//     amenitiesData,
//     roomAmenitiesSidebarOptions,
//     roomAmenitiesData,
//     isHotelSelected
// }) => {
//     const [options, setOptions] = useState([
//         { label: "Hotel", value: "Hotel" },
//         ...formData.room_categories.map((category) => ({
//             label: category.room_category_name,
//             value: category.room_category_name,
//         })),
//     ]);

//     useEffect(() => {
//         if (!formData.hotel_type) {
//             setFormData((prev) => ({
//                 ...prev,
//                 hotel_type: "Hotel",
//             }));
//         }
//     }, [formData.hotel_type, setFormData]);

//     useEffect(() => {
//         setOptions([
//             { label: "Hotel", value: "Hotel" },
//             ...formData.room_categories.map((category) => ({
//                 label: category.room_category_name,
//                 value: category.room_category_name,
//             })),
//         ]);
//     }, [formData.room_categories]);

//     const handleHotelTypeChange = (selectedOption) => {
//         setFormData((prev) => ({
//             ...prev,
//             hotel_type: selectedOption,
//         }));
//         handleSidebarOptionChange(1); // Reset to the first sidebar option on change
//     };

//     const isDefaultHotel = formData.hotel_type === "Hotel";

//     return (
//         <>
//             <div className="d_flex justify_content_between">
//                 <h3>Hotel</h3>
//                 <InputSelectCustomLastStep
//                     options={options}
//                     value={formData.hotel_type}
//                     onChange={handleHotelTypeChange}
//                 />
//             </div>
//             <div className="step_navigate_sidebar_parent d_flex">
//                 <div className="step_navigate_sidebar sticky">
//                     <ul className="step_navigate_sidebar_list">
//                         {(isDefaultHotel ? sidebarOptions : roomAmenitiesSidebarOptions).map((option) => (
//                             <li
//                                 key={option.id}
//                                 style={{ listStyle: 'none' }}
//                                 className={`step_navigate_sidebar_list_item ${option.id === selectedSidebarOption ? 'active_step_navigate_sidebar_list_item' : ''}`}
//                                 onClick={() => handleSidebarOptionChange(option.id)}
//                             >
//                                 {option.label}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="step_navigate_sidebar_right">
// {(isDefaultHotel ? sidebarOptions : roomAmenitiesSidebarOptions).map((option) => (
//     selectedSidebarOption === option.id && (
//         <AmenitiesSection
//             key={option.id}
//             amenities={isDefaultHotel ? selectedSidebarOption.amenitiesData[option.id] : selectedSidebarOption.roomAmenitiesData[option.id]}
//             amenitySelection={amenitySelection}
//             handleAmenityToggle={handleAmenityToggle}
//             handleAmenityOptionChange={handleAmenityOptionChange}
//             handleMultiSelectChange={handleMultiSelectChange}
//             formData={formData}
//         />
//     )
// ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FirstStep;
import React, { useEffect, useState } from "react";
import AmenitiesSection from "../CustomComponents/AmenitiesSection";
import InputSelectCustomLastStep from "../CustomComponents/InputSelectCustomLastStep";

const AmenitiesStep = ({
    formData,
    setFormData,
    amenitySelection,
    handleAmenityToggle,
    handleAmenityOptionChange,
    handleMultiSelectChange,
    handleSidebarOptionChange,
    selectedSidebarOption,
    sidebarOptions,
    roomAmenitiesSidebarOptions,
    isHotelSelected
}) => {
    const [options, setOptions] = useState([
        { label: "Hotel", value: "Hotel" },
        ...formData.room_categories.map((category) => ({
            label: category.room_category_name,
            value: category.room_category_name,
        })),
    ]);

    useEffect(() => {
        if (!formData.hotel_type) {
            setFormData((prev) => ({
                ...prev,
                hotel_type: "Hotel",
            }));
        }
    }, [formData.hotel_type, setFormData]);

    useEffect(() => {
        setOptions([
            { label: "Hotel", value: "Hotel" },
            ...formData.room_categories.map((category) => ({
                label: category.room_category_name,
                value: category.room_category_name,
            })),
        ]);
    }, [formData.room_categories]);

    const handleHotelTypeChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            hotel_type: selectedOption,
        }));
        handleSidebarOptionChange(1); // Reset to the first sidebar option on change
    };

    const isDefaultHotel = formData.hotel_type === "Hotel";

    const currentSidebarOptions = isDefaultHotel ? sidebarOptions : roomAmenitiesSidebarOptions;
    const currentAmenitiesData = currentSidebarOptions?.find(option => option.id === selectedSidebarOption)?.amenitiesData || [];

    return (
        <>
            <div className="d_flex justify_content_between amenities_step_header">
                <h3>Hotel</h3>
                <div>
                    <InputSelectCustomLastStep
                        options={options}
                        value={formData.hotel_type}
                        onChange={handleHotelTypeChange}
                    />
                </div>

            </div>
            <div className="step_navigate_sidebar_parent d_flex">
                <div className="step_navigate_sidebar sticky">
                    <ul className="step_navigate_sidebar_list">
                        {currentSidebarOptions?.map((option) => (
                            <li
                                key={option.id}
                                style={{ listStyle: 'none' }}
                                className={`step_navigate_sidebar_list_item ${option.id === selectedSidebarOption ? 'active_step_navigate_sidebar_list_item' : ''}`}
                                onClick={() => handleSidebarOptionChange(option.id)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="step_navigate_sidebar_right">
                    {currentSidebarOptions?.map((option) => (
                        selectedSidebarOption === option.id && (
                            <AmenitiesSection
                                key={option.id}
                                amenities={currentAmenitiesData}
                                amenitySelection={amenitySelection}
                                handleAmenityToggle={handleAmenityToggle}
                                handleAmenityOptionChange={handleAmenityOptionChange}
                                handleMultiSelectChange={handleMultiSelectChange}
                                formData={formData}
                            />
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default AmenitiesStep;



