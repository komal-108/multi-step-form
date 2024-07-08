import React, { useState } from "react";
import InputFieldCustom from "../CustomComponents/InputFieldCustom";
import AmenityComponent from "../CustomComponents/AmenityComponent";
import { bedTypeOptions , roomViewOptions } from "../Data/Data";
import InputSelectCustom from "../CustomComponents/InputSelectCustom";

const RoomDetail = ({ formData, setFormData }) => {
    const [activeRoomIndex, setActiveRoomIndex] = useState(0);

    const handleChange = (e, index, field, subField) => {
        const { value } = e.target;
        console.log(value);

        const updatedRoomCategories = [...formData.room_categories];

        if (subField) {
            updatedRoomCategories[index][field][subField] = value;
        } else {
            updatedRoomCategories[index][field] = value;
        }

        setFormData({
            ...formData,
            room_categories: updatedRoomCategories,
        });
    };

    const handleAmenitiesChange = (newAmenities, index) => {
        const updatedRoomCategories = [...formData.room_categories];
        updatedRoomCategories[index].amenities = newAmenities;
        setFormData({
            ...formData,
            room_categories: updatedRoomCategories,
        });
    };

    const addRoomCategory = () => {
        setFormData((prev) => ({
            ...prev,
            room_categories: [
                ...prev.room_categories,
                {
                    room_category_name: '',
                    room_size: '',
                    total_rooms_in_category: '',
                    room_no_floor_no: '',
                    bed_type: '',
                    extra_bedding: '',
                    room_view: '',
                    amenities: [],
                    base_adult_count: '',
                    max_adult: '',
                    max_child: '',
                    max_occupancy: '',
                    min_length_of_stay: '',
                    max_length_of_stay: '',
                    room_description: '',
                    price_per_unit: {
                        ep: '',
                        cp: '',
                        map: '',
                        ap: '',
                    },
                    extra_adult_cost: {
                        ep: '',
                        cp: '',
                        map: '',
                        ap: '',
                    },
                    child_with_bed_cost: {
                        ep: '',
                        cp: '',
                        map: '',
                        ap: '',
                    },
                    child_without_bed_cost: {
                        ep: '',
                        cp: '',
                        map: '',
                        ap: '',
                    }
                },
            ],
        }));
        setActiveRoomIndex(formData.room_categories.length); // Set the new room category to be active
    };

    return (
        <>
            <div className="room-category-tabs">
                {formData.room_categories.map((room, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`tab ${activeRoomIndex === index ? "active" : ""}`}
                        onClick={() => setActiveRoomIndex(index)}
                    >
                       {room.room_category_name} Room 
                       {/* {index + 1} */}
                    </button>
                ))}
                <button type="button" onClick={addRoomCategory} style={{cursor:'pointer'}}>+</button>
            </div>
            <div className="room-category-content">
                {formData.room_categories.map((room, index) => (
                    activeRoomIndex === index && (
                        <div key={index}>
                            <div className="form_container_parent">
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Room Category Name"
                                        type="text"
                                        name="room_category_name"
                                        value={room.room_category_name}
                                        onChange={(e) => handleChange(e, index, 'room_category_name')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Room Size"
                                        type="number"
                                        name="room_size"
                                        value={room.room_size}
                                        onChange={(e) => handleChange(e, index, 'room_size')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Total Rooms"
                                        type="number"
                                        name="total_rooms_in_category"
                                        value={room.total_rooms_in_category}
                                        onChange={(e) => handleChange(e, index, 'total_rooms_in_category')}
                                    />
                                </div>

                                <div className="form_container_div_six">
                                    <InputSelectCustom
                                        options={bedTypeOptions}
                                        required={true}
                                        name="bed_type"
                                        value={room.bed_type}
                                        titleName="Bed Type"
                                        onChange={(e) => handleChange(e, index, 'bed_type')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={false}
                                        titleName="Extra Bedding"
                                        type="text"
                                        name="extra_bedding"
                                        value={room.extra_bedding}
                                        onChange={(e) => handleChange(e, index, 'extra_bedding')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputSelectCustom
                                        options={roomViewOptions}
                                        required={true}
                                        name="room_view"
                                        value={room.room_view}
                                        titleName="Room View"
                                        onChange={(e) => handleChange(e, index, 'room_view')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <AmenityComponent
                                        required={true}
                                        titleName="Amenities"
                                        value={room.amenities}
                                        onChange={(newAmenities) => handleAmenitiesChange(newAmenities, index)}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Base Adult (Count)"
                                        type="number"
                                        name="base_adult_count"
                                        value={room.base_adult_count}
                                        onChange={(e) => handleChange(e, index, 'base_adult_count')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Max Adult"
                                        type="number"
                                        name="max_adult"
                                        value={room.max_adult}
                                        onChange={(e) => handleChange(e, index, 'max_adult')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Max Child"
                                        type="number"
                                        name="max_child"
                                        value={room.max_child}
                                        onChange={(e) => handleChange(e, index, 'max_child')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Max Occupancy"
                                        type="number"
                                        name="max_occupancy"
                                        value={room.max_occupancy}
                                        onChange={(e) => handleChange(e, index, 'max_occupancy')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Min Length of Stay"
                                        type="number"
                                        name="min_length_of_stay"
                                        value={room.min_length_of_stay}
                                        onChange={(e) => handleChange(e, index, 'min_length_of_stay')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Max Length of Stay"
                                        type="number"
                                        name="max_length_of_stay"
                                        value={room.max_length_of_stay}
                                        onChange={(e) => handleChange(e, index, 'max_length_of_stay')}
                                    />
                                </div>
                                <div className="form_container_div_six">
                                    <InputFieldCustom
                                        required={true}
                                        titleName="Room Description"
                                        type="text"
                                        name="room_description"
                                        value={room.room_description}
                                        onChange={(e) => handleChange(e, index, 'room_description')}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="d_flex form_container_parent align_items_center">
                                    <div className="rate_plan_heading">
                                        <h5>Price Per Night</h5>
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="EP"
                                            type="number"
                                            name={`price_per_unit.ep`}
                                            value={room.price_per_unit.ep}
                                            onChange={(e) => handleChange(e, index, 'price_per_unit', 'ep')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="CP"
                                            type="number"
                                            name="price_per_unit.cp"
                                            value={room.price_per_unit.cp}
                                            onChange={(e) => handleChange(e, index, 'price_per_unit', 'cp')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="MAP"
                                            type="number"
                                            name="price_per_unit.map"
                                            value={room?.price_per_unit?.map}
                                            onChange={(e) => handleChange(e, index, 'price_per_unit', 'map')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="AP"
                                            type="number"
                                            name="price_per_unit.ap"
                                            value={room.price_per_unit.ap}
                                            onChange={(e) => handleChange(e, index, 'price_per_unit', 'ap')}
                                        />
                                    </div>
                                </div>
                                <div className="d_flex form_container_parent align_items_center">
                                    <div className="rate_plan_heading">
                                        <h5>Extra Adult Cost</h5>
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="EP"
                                            type="number"
                                            name="extra_adult_cost.ep"
                                            value={room.extra_adult_cost.ep}
                                            onChange={(e) => handleChange(e, index, 'extra_adult_cost', 'ep')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="CP"
                                            type="number"
                                            name="extra_adult_cost.cp"
                                            value={room.extra_adult_cost.cp}
                                            onChange={(e) => handleChange(e, index, 'extra_adult_cost', 'cp')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="MAP"
                                            type="number"
                                            name="extra_adult_cost.map"
                                            value={room.extra_adult_cost.map}
                                            onChange={(e) => handleChange(e, index, 'extra_adult_cost', 'map')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="AP"
                                            type="number"
                                            name="extra_adult_cost.ap"
                                            value={room.extra_adult_cost.ap}
                                            onChange={(e) => handleChange(e, index, 'extra_adult_cost', 'ap')}
                                        />
                                    </div>
                                </div>
                                <div className="d_flex form_container_parent align_items_center">
                                    <div className="rate_plan_heading">
                                        <h5>Child With Bed Cost</h5>
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="EP"
                                            type="number"
                                            name="child_with_bed_cost.ep"
                                            value={room.child_with_bed_cost.ep}
                                            onChange={(e) => handleChange(e, index, 'child_with_bed_cost', 'ep')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="CP"
                                            type="number"
                                            name="child_with_bed_cost.cp"
                                            value={room.child_with_bed_cost.cp}
                                            onChange={(e) => handleChange(e, index, 'child_with_bed_cost', 'cp')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="MAP"
                                            type="number"
                                            name="child_with_bed_cost.map"
                                            value={room.child_with_bed_cost.map}
                                            onChange={(e) => handleChange(e, index, 'child_with_bed_cost', 'map')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="AP"
                                            type="number"
                                            name="child_with_bed_cost.ap"
                                            value={room.child_with_bed_cost.ap}
                                            onChange={(e) => handleChange(e, index, 'child_with_bed_cost', 'ap')}
                                        />
                                    </div>
                                </div>
                                <div className="d_flex form_container_parent align_items_center">
                                    <div className="rate_plan_heading">
                                        <h5>Child Without Bed Cost</h5>
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="EP"
                                            type="number"
                                            name="child_without_bed_cost.ep"
                                            value={room.child_without_bed_cost.ep}
                                            onChange={(e) => handleChange(e, index, 'child_without_bed_cost', 'ep')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="CP"
                                            type="number"
                                            name="child_without_bed_cost.cp"
                                            value={room.child_without_bed_cost.cp}
                                            onChange={(e) => handleChange(e, index, 'child_without_bed_cost', 'cp')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="MAP"
                                            type="number"
                                            name="child_without_bed_cost.map"
                                            value={room.child_without_bed_cost.map}
                                            onChange={(e) => handleChange(e, index, 'child_without_bed_cost', 'map')}
                                        />
                                    </div>
                                    <div className="form_container_div_six form_container_div_six_mobile">
                                        <InputFieldCustom
                                            required={true}
                                            titleName="AP"
                                            type="number"
                                            name="child_without_bed_cost.ap"
                                            value={room.child_without_bed_cost.ap}
                                            onChange={(e) => handleChange(e, index, 'child_without_bed_cost', 'ap')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </>
    );
};

export default RoomDetail;
