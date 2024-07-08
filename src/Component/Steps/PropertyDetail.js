import React from "react";
import InputFieldCustom from "../CustomComponents/InputFieldCustom";
import InputSelectCustom from "../CustomComponents/InputSelectCustom";

const PropertyDetails = ({
  formData,
  errors,
  handleChange,
  hotelLocationOptions,
  hotelTypeOptions,
  propertyRatingOptions,
  locationSpecificationOptions,
}) => {
console.log(errors);
  return (
    <div className="form_container_parent">
      <div className="form_container_div_two">
        <InputFieldCustom
          required={true}
          titleName="Hotel Name"
          type="text"
          name="hotel_name"
          value={formData.hotel_name}
          onChange={handleChange}
        />
        {/* {errors.hotel_name && <p className="error">{errors.hotel_name}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputSelectCustom
          options={hotelLocationOptions}
          required={true}
          name="hotel_location"
          value={formData.hotel_location}
          titleName="Hotel Location"
          onChange={handleChange}
        />
        {/* {errors.hotel_location && <p className="error">{errors.hotel_location}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputSelectCustom
          options={hotelTypeOptions}
          required={true}
          name="hotel_type"
          value={formData.hotel_type}
          titleName="Hotel Type"
          onChange={handleChange}
        />
        {/* {errors.hotel_type && <p className="error">{errors.hotel_type}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputSelectCustom
          options={propertyRatingOptions}
          required={true}
          name="property_rating"
          value={formData.property_rating}
          titleName="Property Rating"
          onChange={handleChange}
        />
        {/* {errors.property_rating && <p className="error">{errors.property_rating}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputFieldCustom
          required={true}
          titleName="Total No. of Rooms"
          type="number"
          name="total_rooms"
          value={formData.total_rooms}
          onChange={handleChange}
        />
        {/* {errors.total_rooms && <p className="error">{errors.total_rooms}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputFieldCustom
          required={true}
          titleName="Complete Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {/* {errors.address && <p className="error">{errors.address}</p>} */}
      </div>

      <div className="form_container_div_two">
        <InputFieldCustom
          required={true}
          titleName="Phone Number"
          type="number"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />
        {errors.phone_no && <p className="error">{errors.phone_no}</p>}
      </div>

      <div className="form_container_div_two">
        <InputFieldCustom
          required={true}
          titleName="Email Address"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form_container_div_three">
        <InputFieldCustom
          required={true}
          titleName="Google Listing URL"
          type="text"
          name="google_listing_url"
          value={formData.google_listing_url}
          onChange={handleChange}
        />
        {errors.google_listing_url && <p className="error">{errors.google_listing_url}</p>}
      </div>

      <div className="form_container_div_three">
        <InputSelectCustom
          options={locationSpecificationOptions}
          required={true}
          name="location_specification"
          value={formData.location_specification}
          titleName="Location Specification"
          onChange={handleChange}
        />
        {errors.location_specification && <p className="error">{errors.location_specification}</p>}
      </div>

      <div className="form_container_div_three">
        <InputFieldCustom
          required={true}
          titleName="Additional Property Details"
          type="text"
          name="additional_prop_detail"
          value={formData.additional_prop_detail}
          onChange={handleChange}
        />
        {errors.additional_prop_detail && <p className="error">{errors.additional_prop_detail}</p>}
      </div>
    </div>
  );
};

export default PropertyDetails;
