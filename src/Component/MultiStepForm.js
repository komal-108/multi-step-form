// import React, { useState } from "react";

// import {
//   sidebarOptions,
//   roomAmenitiesData,
//   roomAmenitiesSidebarOptions,
//   locationSpecificationOptions,
//   hotelTypeOptions,
//   propertyRatingOptions,
//   hotelLocationOptions,
// } from "./Data/Data";
// import PropertyDetails from "./Steps/PropertyDetail";
// import FileUpload from "./Steps/FileUpload";
// import RoomDetail from "./Steps/RoomDetail";
// import AmenitiesStep from "./Steps/AmenitiesStep";

// const MultiStepForm = () => {
//   const [selectedStep, setSelectedStep] = useState(1);
//   const [selectedSidebarOption, setSelectedSidebarOption] = useState(1);
//   const [amenitySelection, setAmenitySelection] = useState({});
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const allowedExtensionsOnce = ["pdf"];
//   const allowedExtensionsMultiple = ["jpg", "jpeg", "png", "webp"];
//   const [formData, setFormData] = useState({
//     hotel_name: '',
//     hotel_location: '',
//     hotel_type: '',
//     property_rating: '',
//     total_rooms: '',
//     address: '',
//     phone_no: '',
//     email: '',
//     google_listing_url: '',
//     location_specification: '',
//     additional_prop_detail: '',
//     selectedFiles: [],
//     room_categories: [
//       {
//         room_category_name: '',
//         room_size: '',
//         total_rooms_in_category: '',
//         room_no_floor_no: '',
//         bed_type: '',
//         extra_bedding: '',
//         room_view: '',
//         amenities: [],
//         base_adult_count: '',
//         max_adult: '',
//         max_child: '',
//         max_occupancy: '',
//         min_length_of_stay: '',
//         max_length_of_stay: '',
//         room_description: '',
//         price_per_unit: {
//           ep: '',
//           cp: '',
//           map: '',
//           ap: '',
//         },
//         extra_adult_cost: {
//           ep: '',
//           cp: '',
//           map: '',
//           ap: '',
//         },
//         child_with_bed_cost: {
//           ep: '',
//           cp: '',
//           map: '',
//           ap: '',
//         },
//         child_without_bed_cost: {
//           ep: '',
//           cp: '',
//           map: '',
//           ap: '',
//         },
//       },
//     ],
//     amenities: [] // Add this to store amenities data
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const [errors, setErrors] = useState({});
//   const validateStep = () => {
//     let currentErrors = {};
//     setErrors(currentErrors);
//     return Object.keys(currentErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateStep()) {
//       console.log("Form data after validation: ", formData);
//     }
//   };
//   console.log(formData);
//   const handleAmenityOptionChange = (amenityName, selectedOption) => {
//     const type = formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
//     const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);

//     setAmenitySelection((prev) => ({
//       ...prev,
//       [amenityName]: {
//         ...prev[amenityName],
//         selectedOption,
//         showMultiSelect: true,
//       },
//     }));

//     // Update formData based on selected option
//     const updatedFormData = updateAmenities(formData, type, sidebarOptionName, amenityName, 'option', selectedOption);

//     setFormData(updatedFormData);
//   };

//   const handleMultiSelectChange = (amenityName, selectedOptions) => {
//     const type = formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
//     const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);

//     // Update formData based on selected multi-options
//     const updatedFormData = updateAmenities(formData, type, sidebarOptionName, amenityName, 'multiple_options', selectedOptions);

//     setFormData(updatedFormData);
//   };

//   const handleSidebarOptionChange = (optionId) => {
//     setSelectedSidebarOption(optionId);
//   };

//   const handlePrevious = () => {
//     const previousStep = selectedStep > 1 ? selectedStep - 1 : selectedStep;
//     setSelectedStep(previousStep);
//   };

//   const stepFormData = [
//     { id: 1, content: "Property Detail" },
//     { id: 2, content: "Images" },
//     { id: 3, content: "Room Details" },
//     { id: 4, content: "Hotel/Room Amenities" },
//   ];

//   const handleNext = () => {
//     if (validateStep()) {
//       const nextStep = selectedStep < stepFormData.length ? selectedStep + 1 : selectedStep;
//       setSelectedStep(nextStep);
//     }
//   };

//   const updateAmenities = (formData, type, sidebarOptionName, amenityName, field, value) => {
//     let updatedFormData = { ...formData };

//     // Find or create the type (hotel or room category)
//     let typeIndex = updatedFormData.amenities.findIndex(a => a.type === type);
//     if (typeIndex === -1) {
//       updatedFormData.amenities.push({ type, hotelAmenity: [] });
//       typeIndex = updatedFormData.amenities.length - 1;
//     }

//     // Find or create the hotelAmenity with the selected sidebar option
//     let hotelAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity.findIndex(h => h.name === sidebarOptionName);
//     if (hotelAmenityIndex === -1) {
//       updatedFormData.amenities[typeIndex].hotelAmenity.push({ name: sidebarOptionName, subAmenities: [] });
//       hotelAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity.length - 1;
//     }

//     // Find or create the subAmenity
//     let subAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity[hotelAmenityIndex].subAmenities.findIndex(s => s.sub_name === amenityName);
//     if (subAmenityIndex === -1) {
//       updatedFormData.amenities[typeIndex].hotelAmenity[hotelAmenityIndex].subAmenities.push({ sub_name: amenityName, value: '', option: '', multiple_options: [] });
//       subAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity[hotelAmenityIndex].subAmenities.length - 1;
//     }

//     // Update the subAmenity field
//     updatedFormData.amenities[typeIndex].hotelAmenity[hotelAmenityIndex].subAmenities[subAmenityIndex][field] = value;

//     return updatedFormData;
//   };

//   const handleAmenityToggle = (amenityName, showDetails) => {
//     const type = formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
//     const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);
//     const value = showDetails ? 1 : 0;

//     setAmenitySelection((prev) => ({
//       ...prev,
//       [amenityName]: {
//         ...prev[amenityName],
//         showDetails,
//         selectedOption: showDetails ? '' : prev[amenityName]?.selectedOption || '',
//         showMultiSelect: false,
//       },
//     }));

//     // Update formData based on amenity selection
//     const updatedFormData = updateAmenities(formData, type, sidebarOptionName, amenityName, 'value', value);

//     setFormData(updatedFormData);
//   };

//   const getSidebarOptionName = (optionId) => {
//     const option = sidebarOptions.find((option) => option.id === optionId);
//     return option ? option.label : "";
//   };

//   const handleRemoveLogobtn = (index) => {
//     const newSelectedFiles = [...selectedFiles];
//     newSelectedFiles.splice(index, 1);
//     setSelectedFiles(newSelectedFiles);
//   };

//   return (
//     <div className="container">
//       <div className="night_audit_page" style={{ borderRadius: "6px" }}>
//         <div className="multiStep_form_top flex align_items_center justify_content_center">
//           {stepFormData.map((item) => (
//             <div
//               className={`night_audit_top_step_form_child flex align_items_center flex_gap_10 ${item.id <= selectedStep ? "selected" : ""}`}
//               key={item.id}
//               style={{ flexBasis: `calc(100% / ${stepFormData.length})` }}
//             >
//               <div className="step_form_index flex align_items_center justify_content_center">
//                 {item.id}
//               </div>
//               <div className="step_form_content">
//                 <p>{item.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleSubmit}>
//           {selectedStep === 1 && (
//             <>
//               <PropertyDetails
//                 formData={formData}
//                 errors={errors}
//                 handleChange={handleChange}
//                 hotelLocationOptions={hotelLocationOptions}
//                 hotelTypeOptions={hotelTypeOptions}
//                 propertyRatingOptions={propertyRatingOptions}
//                 locationSpecificationOptions={locationSpecificationOptions}
//               />
//               <div className="form_button_container">
//                 <button type="button" onClick={handleNext} className="primary_btn">
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//           {selectedStep === 2 && (
//             <>
//               <FileUpload
//                 selectedFiles={selectedFiles}
//                 setSelectedFiles={setSelectedFiles}
//                 handleRemoveLogobtn={handleRemoveLogobtn}
//               />
//             </>
//           )}
//           {selectedStep === 3 && (
//             <>
//               <RoomDetail formData={formData} setFormData={setFormData} />
//             </>
//           )}
//           {selectedStep === 4 && (
//             <>
//               <AmenitiesStep
//                 formData={formData}
//                 setFormData={setFormData}
//                 amenitySelection={amenitySelection}
//                 handleAmenityToggle={handleAmenityToggle}
//                 handleAmenityOptionChange={handleAmenityOptionChange}
//                 handleMultiSelectChange={handleMultiSelectChange}
//                 handleSidebarOptionChange={handleSidebarOptionChange}
//                 selectedSidebarOption={selectedSidebarOption}
//                 roomAmenitiesSidebarOptions={roomAmenitiesSidebarOptions}
//                 sidebarOptions={sidebarOptions}
//                 amenitiesData={sidebarOptions[selectedSidebarOption]?.amenitiesData || []}
//                 isHotelSelected={formData.hotel_type === "Hotel"}
//               />
//             </>
//           )}
//         </form>
//         {selectedStep > 1 && selectedStep <= 4 && (
//           <div className="form_button_container">
//             <button type="button" onClick={handlePrevious} className="secondary_btn">
//               Back
//             </button>
//             {selectedStep < 4 ? (
//               <button type="button" onClick={handleNext} className="primary_btn">
//                 Next
//               </button>
//             ) : (
//               <button type="submit" className="primary_btn">
//                 Submit
//               </button>
//             )}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;

import React, { useState } from "react";
import {
  sidebarOptions,
  roomAmenitiesSidebarOptions,
  hotelTypeOptions,
  propertyRatingOptions,
  hotelLocationOptions,
  locationSpecificationOptions,
} from "./Data/Data";
import PropertyDetails from "./Steps/PropertyDetail";
import FileUpload from "./Steps/FileUpload";
import RoomDetail from "./Steps/RoomDetail";
import AmenitiesStep from "./Steps/AmenitiesStep";
import FormDataTable from "./FormDataTable";

const MultiStepForm = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedSidebarOption, setSelectedSidebarOption] = useState(1);
  const [amenitySelection, setAmenitySelection] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    hotel_name: "",
    hotel_location: "",
    hotel_type: "",
    property_rating: "",
    total_rooms: "",
    address: "",
    phone_no: "",
    email: "",
    google_listing_url: "",
    location_specification: "",
    additional_prop_detail: "",
    selectedFiles: [],
    room_categories: [
      {
        room_category_name: "",
        room_size: "",
        total_rooms_in_category: "",
        room_no_floor_no: "",
        bed_type: "",
        extra_bedding: "",
        room_view: "",
        amenities: [],
        base_adult_count: "",
        max_adult: "",
        max_child: "",
        max_occupancy: "",
        min_length_of_stay: "",
        max_length_of_stay: "",
        room_description: "",
        price_per_unit: {
          ep: "",
          cp: "",
          map: "",
          ap: "",
        },
        extra_adult_cost: {
          ep: "",
          cp: "",
          map: "",
          ap: "",
        },
        child_with_bed_cost: {
          ep: "",
          cp: "",
          map: "",
          ap: "",
        },
        child_without_bed_cost: {
          ep: "",
          cp: "",
          map: "",
          ap: "",
        },
      },
    ],
    amenities: [], // Add this to store amenities data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const validateStep = () => {
    let currentErrors = {};
    // Add validation logic and populate currentErrors if there are any validation issues
    setErrors(currentErrors);
    console.log("Validation errors:", currentErrors); // Debugging log
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e) => {
    console.log("fghj");
    e.preventDefault();
    setSelectedStep(5); // Move to the next step after submitting
    if (validateStep()) {
      console.log("Form data after validation: ", formData);
    }
  };

  const handleAmenityOptionChange = (amenityName, selectedOption) => {
    const type =
      formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
    const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);

    setAmenitySelection((prev) => ({
      ...prev,
      [amenityName]: {
        ...prev[amenityName],
        selectedOption,
        showMultiSelect: true,
      },
    }));

    // Update formData based on selected option
    const updatedFormData = updateAmenities(
      formData,
      type,
      sidebarOptionName,
      amenityName,
      "option",
      selectedOption
    );

    setFormData(updatedFormData);
  };

  const handleMultiSelectChange = (amenityName, selectedOptions) => {
    const type =
      formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
    const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);

    // Update formData based on selected multi-options
    const updatedFormData = updateAmenities(
      formData,
      type,
      sidebarOptionName,
      amenityName,
      "multiple_options",
      selectedOptions
    );

    setFormData(updatedFormData);
  };

  const handleSidebarOptionChange = (optionId) => {
    setSelectedSidebarOption(optionId);
  };

  const handlePrevious = () => {
    const previousStep = selectedStep > 1 ? selectedStep - 1 : selectedStep;
    setSelectedStep(previousStep);
  };

  const stepFormData = [
    { id: 1, content: "Property Detail" },
    { id: 2, content: "Images" },
    { id: 3, content: "Room Details" },
    { id: 4, content: "Hotel/Room Amenities" },
    { id: 5, content: "Form Data" },
  ];

  const handleNext = () => {
    if (validateStep()) {
      const nextStep =
        selectedStep < stepFormData.length ? selectedStep + 1 : selectedStep;
      setSelectedStep(nextStep);
    }
  };

  const updateAmenities = (
    formData,
    type,
    sidebarOptionName,
    amenityName,
    field,
    value
  ) => {
    let updatedFormData = { ...formData };

    // Find or create the type (hotel or room category)
    let typeIndex = updatedFormData.amenities.findIndex(
      (a) => a.type === type
    );
    if (typeIndex === -1) {
      updatedFormData.amenities.push({ type, hotelAmenity: [] });
      typeIndex = updatedFormData.amenities.length - 1;
    }

    // Find or create the hotelAmenity with the selected sidebar option
    let hotelAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity.findIndex(
      (h) => h.name === sidebarOptionName
    );
    if (hotelAmenityIndex === -1) {
      updatedFormData.amenities[typeIndex].hotelAmenity.push({
        name: sidebarOptionName,
        subAmenities: [],
      });
      hotelAmenityIndex =
        updatedFormData.amenities[typeIndex].hotelAmenity.length - 1;
    }

    // Find or create the subAmenity
    let subAmenityIndex = updatedFormData.amenities[typeIndex].hotelAmenity[
      hotelAmenityIndex
    ].subAmenities.findIndex((s) => s.sub_name === amenityName);
    if (subAmenityIndex === -1) {
      updatedFormData.amenities[typeIndex].hotelAmenity[
        hotelAmenityIndex
      ].subAmenities.push({
        sub_name: amenityName,
        value: "",
        option: "",
        multiple_options: [],
      });
      subAmenityIndex =
        updatedFormData.amenities[typeIndex].hotelAmenity[
          hotelAmenityIndex
        ].subAmenities.length - 1;
    }

    // Update the subAmenity field
    updatedFormData.amenities[typeIndex].hotelAmenity[
      hotelAmenityIndex
    ].subAmenities[subAmenityIndex][field] = value;

    return updatedFormData;
  };

  const handleAmenityToggle = (amenityName, showDetails) => {
    const type =
      formData.hotel_type === "Hotel" ? "Hotel" : formData.hotel_type;
    const sidebarOptionName = getSidebarOptionName(selectedSidebarOption);
    const value = showDetails ? 1 : 0;

    setAmenitySelection((prev) => ({
      ...prev,
      [amenityName]: {
        ...prev[amenityName],
        showDetails,
        selectedOption: showDetails
          ? ""
          : prev[amenityName]?.selectedOption || "",
        showMultiSelect: false,
      },
    }));

    // Update formData based on amenity selection
    const updatedFormData = updateAmenities(
      formData,
      type,
      sidebarOptionName,
      amenityName,
      "value",
      value
    );

    setFormData(updatedFormData);
  };

  const getSidebarOptionName = (optionId) => {
    const option = sidebarOptions.find((option) => option.id === optionId);
    return option ? option.label : "";
  };

  const handleRemoveLogobtn = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };
console.log(selectedStep);
  return (
    <div className="container">
      <div className="night_audit_page" style={{ borderRadius: "6px" }}>
        <div className="multiStep_form_top flex align_items_center justify_content_center">
          {stepFormData.map((item) => (
            <div
              className={`night_audit_top_step_form_child flex align_items_center flex_gap_10 ${
                item.id <= selectedStep ? "selected" : ""
              }`}
              key={item.id}
              style={{
                flexBasis: `calc(100% / ${stepFormData.length})`,
              }}
            >
              <div className="step_form_index flex align_items_center justify_content_center">
                {item.id}
              </div>
              <div className="step_form_content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form >
          {selectedStep === 1 && (
            <>
              <PropertyDetails
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                hotelLocationOptions={hotelLocationOptions}
                hotelTypeOptions={hotelTypeOptions}
                propertyRatingOptions={propertyRatingOptions}
                locationSpecificationOptions={locationSpecificationOptions}
              />
              <div className="form_button_container">
                <button
                  type="button"
                  onClick={handleNext}
                  className="primary_btn"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {selectedStep === 2 && (
            <>
              <FileUpload
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                handleRemoveLogobtn={handleRemoveLogobtn}
              />
            </>
          )}
          {selectedStep === 3 && (
            <>
              <RoomDetail formData={formData} setFormData={setFormData} />
            </>
          )}
          {selectedStep === 4 && (
            <>
              <AmenitiesStep
                formData={formData}
                setFormData={setFormData}
                amenitySelection={amenitySelection}
                handleAmenityToggle={handleAmenityToggle}
                handleAmenityOptionChange={handleAmenityOptionChange}
                handleMultiSelectChange={handleMultiSelectChange}
                handleSidebarOptionChange={handleSidebarOptionChange}
                selectedSidebarOption={selectedSidebarOption}
                roomAmenitiesSidebarOptions={roomAmenitiesSidebarOptions}
                sidebarOptions={sidebarOptions}
                amenitiesData={
                  sidebarOptions[selectedSidebarOption]?.amenitiesData || []
                }
                isHotelSelected={formData.hotel_type === "Hotel"}
              />
            </>
          )}
          {selectedStep === 5 && (
            <>
              <FormDataTable formData={formData} />
            </>
          )}
        </form>
        {selectedStep > 1 && selectedStep <= 4 && (
          <div className="form_button_container">
            <button
              type="button"
              onClick={handlePrevious}
              className="secondary_btn"
            >
              Back
            </button>
            {selectedStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="primary_btn"
              >
                Next
              </button>
            ) : (
              <button type="button" className="primary_btn" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;


