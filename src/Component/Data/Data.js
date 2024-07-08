export const sidebarOptions = [
    { id: 1, label: "Mandatory",amenitiesData : [
        { name: "Air Conditioning", options: ["Room Controlled", "Centralized"] },
        { name: "Laundry", options: ["Limited Piece", "Unlimited Piece"], multiSelectOptions: ["Limited Piece of Laundry free"] },
        { name: "Newspaper", multiSelectOptions: ["Local Language", "English"] },
        { name: "Parking", options: ["Free", "Paid"], multiSelectOptions: ["Onsite", "Valet", "Public"] },
        { name: "Room service", options: ["24 Hours", "Limited Duration"], multiSelectOptions: ["4 Hours", "Limited Hours"] },
        { name: "Smoke detector", multiSelectOptions: ["In Room", "Public"] },
        { name: "Smoking rooms" },
        { name: "Swimming Pool", multiSelectOptions: ["Common Pool", "Kids Pool", "Infinity Pool", "Indoor Pool", "Heated Pool", "Rooftop Pool", "Sunny Swimming", "Plunge Pool", "Pool over", "Pool With a view", "Saltwater Pool", "Shallow end", "Indoor Pool", "Fully secluded outdoor pool", "Women-only Pool"] },
        { name: "Wifi", options: ["Free", "Paid"], multiSelectOptions: ["Speed Suitable for working", "Speed Suitable for surfing", "Unreliable", "Available in Lobby"] },
        { name: "Lounge", multiSelectOptions: ["Cigar Lounge", "Private", "Shared"] },
        { name: "Reception", options: ["24 Hours", "Limited Duration"] },
        { name: "Bar" },
        { name: "Restaurant", multiSelectOptions: ["Halal", "Kosher", "Indian Food Options Available"] },
        { name: "Luggage assistance" },
        { name: "Wheelchair", options: ["Free", "Paid"] },
        { name: "Gym/ Fitness centre", multiSelectOptions: ["24 Hours", "Personal Trainer"] },
        { name: "CCTV" },
        { name: "Fire extinguishers" },
        { name: "Airport Transfers", options: ["Free", "Paid"], multiSelectOptions: ["Shared Shuttle", "Private Car", "Luxury Car"] },
        { name: "First-aid services" }
    ], },
    { id: 2, label: "Basic facilities", amenitiesData : [
        { name: "Elevator/ Lift" },
        { name: "Housekeeping" },
        { name: "Kitchen/Kitchenette", multiSelectOptions: ["Cooking Appliances", "Microwave", "Utensils", "Toaster", "Induction", "Cutlery"] },
        { name: "LAN", options: ["Free", "Paid"] },
        { name: "Power backup", options: ["Genset", "Inverter"] },
        { name: "Refrigerator" },
        { name: "Umbrellas" },
        { name: "Washing Machine" },
        { name: "Laundromat" },
        { name: "EV Charging Station" }
    ], },
    { id: 3, label: "General Services", amenitiesData : [{ name: "Bellboy service" }, { name: "Caretaker" }, { name: "Concierge", options: ["Free", "Paid"] }, { name: "Multilingual Staff", multiSelectOptions: ["English", "Urdu", "Arabic", "Gujarati", "Bengali", "Tamil", "Telugu", "Kannada", "Punjabi", "Hindi", "Marathi", "Malayalam"] }, { name: "Luggage storage" }, { name: "Specially abled assistance", multiSelectOptions: ["Auditory Guidance", "Wheelchair", "Braille", "Tactile Signs"] }, { name: "Wake-up Call / Service" }, { name: "Butler Services", multiSelectOptions: ["Personal", "For each floor"] }, { name: "Doctor on call" }, { name: "Medical centre" }, { name: "Pool/ Beach towels" }] },
    { id: 4, label: "Outdoor Activities and Sports" , amenitiesData : [{ name: "Beach", multiSelectOptions: ["Private", "BeachFront"] }, { name: "Bonfire", options: ["On Request", "Paid"] }, { name: "Golf" }, { name: "Kayaks" }, { name: "Outdoor sports", multiSelectOptions: ["basketball", "football", "volleyball", "cricket", "Tennis", "Badminton", "Swings", "Rock Climbing", "Archery", "Horse Riding", "Hiking", "Squash"] }, { name: "Snorkelling", options: ["Free", "Paid"] }, { name: "Telescope" }, { name: "Water sports", multiSelectOptions: ["Wind Surfing", "Pedalos", "Water Skiing", "Diving", "Fishing", "Water Slides", "Water Park", "Trainer"] }, { name: "Canoeing", options: ["Free", "Paid"] }, { name: "Skiing", multiSelectOptions: ["Trainer", "Equipment"] }, { name: "Jungle Safari", options: ["Free", "Paid"] }, { name: "Cycling" }] },

    { id: 5, label: "Common Area" , amenitiesData :[{ name: "Balcony/ Terrace" }, { name: "Fireplace", options: ["Outdoor", "Indoor", "Common"] }, { name: "Lawn" }, { name: "Library" }, { name: "Seating Area" }, { name: "Sun Deck" }, { name: "Verandah" }, { name: "Jacuzzi", options: ["For Women Only", "Available for couples"] }, { name: "Prayer Room" }, { name: "Living Room" }, { name: "Outdoor Furniture" }, { name: "Picnic area" }, { name: "Game Room" }, { name: "Sitout Area", options: ["Poolside Sit-out-area", "Seating Arrangement on the Lawn", "Verandah", "Balcony", "Patio"] }, { name: "Bonfire Pit" }] },
    { id: 6, label: "Food And Drinks", amenitiesData :  [{ name: "Barbeque", options: ["Free", "Paid"] }, { name: "Cafe", options: ["24*7", "Limited Hours"] }, { name: "Coffee shop", options: ["24*7", "Limited Hours"] }, { name: "Dining Area" }, { name: "Kid's Menu" }, { name: "Bakery" }, { name: "Breakfast", options: "Indian Food Options Available" }]},
    { id: 7, label: "Health and Wellness" , amenitiesData :[{ name: "Activity Centre" }, { name: "Reflexology" }, { name: "Yoga" }, { name: "Meditation Room" }] },
    { id: 8, label: "Business Center and Conferences" , amenitiesData :[{ name: "Banquet" }, { name: "Business Center" }, { name: "Conference room" }, { name: "Photocopying" }, { name: "Fax service" }, { name: "Printer" }] },
    { id: 9, label: "Beauty and Spa" , amenitiesData : [{ name: "Massage", multiSelectOptions: ["Couple Massages", "Foot Massage"] }, { name: "Salon", multiSelectOptions: ["Waxing", "Hair Cut"] }, { name: "Spa", options: ["Free", "Paid"] }, { name: "Steam and Sauna", options: ["Free", "Paid"] }, { name: "Open air bath" }, { name: "Hammam", multiSelectOptions: ["For Woman Only", "Available for Couples"] }]},
    { id: 10, label: "Security" , amenitiesData :[{ name: "Security alarms" }, { name: "Security Guard" }, { name: "Carbon Monoxide Detector" }] },
    { id: 11, label: "Entertainment", amenitiesData : [{ name: "Shuttle Service", options: ["Free", "Paid"] }]},
    { id: 12, label: "Transfers" , amenitiesData : [{ name: "Events", multiSelectOptions: ["Live Band", "Live Singer", "Live Ghazal", "Live Music", "Puppet Show", "Magic", "Fire Show", "Karaoke", "Movies", "DJ", "Stand-up Comedy", "Folk Dance"] }, { name: "Pub" }, { name: "Professional Photography" }, { name: "Night Club" }, { name: "Beach club" }, { name: "Movie Room" }, { name: "Music System" }, { name: "Water Park" }]},
    { id: 13, label: "Shopping", amenitiesData : [{ name: "Book shop" }, { name: "Souvenir shop" }, { name: "Jewellery Shop" }] },
    { id: 14, label: "Indoor Activities and Sports", amenitiesData : [{ name: "Casino", multiSelectOptions: ["Free Entry", "Paid Entry"] }, { name: "Indoor games", multiSelectOptions: ["Board Games", "Pool Table", "Air Hockey", "Dart", "Table Tennis", "Carrom Board", "Foosball", "Bowling", "Puzzles"] }] },
    { id: 15, label: "Family and Kids" , amenitiesData :  [{ name: "Childcare service", multiSelectOptions: ["Babysitting", "Cribs"] }, { name: "Children's play area", multiSelectOptions: ["Books", "DVDs", "Swings", "Music", "Video Games"] }, { name: "Kids' Club" }, { name: "Strollers" }]},
    { id: 16, label: "Pre Essential" , amenitiesData : [{ name: "Pet bowls" }, { name: "Pet baskets" }]},
    { id: 17, label: "Payment Services" , amenitiesData :[{ name: "ATM" }, { name: "Currency Exchange" }] }
];

// export const amenitiesData = {
//     1: [
//         { name: "Air Conditioning", options: ["Room Controlled", "Centralized"] },
//         { name: "Laundry", options: ["Limited Piece", "Unlimited Piece"], multiSelectOptions: ["Limited Piece of Laundry free"] },
//         { name: "Newspaper", multiSelectOptions: ["Local Language", "English"] },
//         { name: "Parking", options: ["Free", "Paid"], multiSelectOptions: ["Onsite", "Valet", "Public"] },
//         { name: "Room service", options: ["24 Hours", "Limited Duration"], multiSelectOptions: ["4 Hours", "Limited Hours"] },
//         { name: "Smoke detector", multiSelectOptions: ["In Room", "Public"] },
//         { name: "Smoking rooms" },
//         { name: "Swimming Pool", multiSelectOptions: ["Common Pool", "Kids Pool", "Infinity Pool", "Indoor Pool", "Heated Pool", "Rooftop Pool", "Sunny Swimming", "Plunge Pool", "Pool over", "Pool With a view", "Saltwater Pool", "Shallow end", "Indoor Pool", "Fully secluded outdoor pool", "Women-only Pool"] },
//         { name: "Wifi", options: ["Free", "Paid"], multiSelectOptions: ["Speed Suitable for working", "Speed Suitable for surfing", "Unreliable", "Available in Lobby"] },
//         { name: "Lounge", multiSelectOptions: ["Cigar Lounge", "Private", "Shared"] },
//         { name: "Reception", options: ["24 Hours", "Limited Duration"] },
//         { name: "Bar" },
//         { name: "Restaurant", multiSelectOptions: ["Halal", "Kosher", "Indian Food Options Available"] },
//         { name: "Luggage assistance" },
//         { name: "Wheelchair", options: ["Free", "Paid"] },
//         { name: "Gym/ Fitness centre", multiSelectOptions: ["24 Hours", "Personal Trainer"] },
//         { name: "CCTV" },
//         { name: "Fire extinguishers" },
//         { name: "Airport Transfers", options: ["Free", "Paid"], multiSelectOptions: ["Shared Shuttle", "Private Car", "Luxury Car"] },
//         { name: "First-aid services" }
//     ],
//     2: [
//         { name: "Elevator/ Lift" },
//         { name: "Housekeeping" },
//         { name: "Kitchen/Kitchenette", multiSelectOptions: ["Cooking Appliances", "Microwave", "Utensils", "Toaster", "Induction", "Cutlery"] },
//         { name: "LAN", options: ["Free", "Paid"] },
//         { name: "Power backup", options: ["Genset", "Inverter"] },
//         { name: "Refrigerator" },
//         { name: "Umbrellas" },
//         { name: "Washing Machine" },
//         { name: "Laundromat" },
//         { name: "EV Charging Station" }
//     ],
//     3: [{ name: "Bellboy service" }, { name: "Caretaker" }, { name: "Concierge", options: ["Free", "Paid"] }, { name: "Multilingual Staff", multiSelectOptions: ["English", "Urdu", "Arabic", "Gujarati", "Bengali", "Tamil", "Telugu", "Kannada", "Punjabi", "Hindi", "Marathi", "Malayalam"] }, { name: "Luggage storage" }, { name: "Specially abled assistance", multiSelectOptions: ["Auditory Guidance", "Wheelchair", "Braille", "Tactile Signs"] }, { name: "Wake-up Call / Service" }, { name: "Butler Services", multiSelectOptions: ["Personal", "For each floor"] }, { name: "Doctor on call" }, { name: "Medical centre" }, { name: "Pool/ Beach towels" }],

//     4: [{ name: "Beach", multiSelectOptions: ["Private", "BeachFront"] }, { name: "Bonfire", options: ["On Request", "Paid"] }, { name: "Golf" }, { name: "Kayaks" }, { name: "Outdoor sports", multiSelectOptions: ["basketball", "football", "volleyball", "cricket", "Tennis", "Badminton", "Swings", "Rock Climbing", "Archery", "Horse Riding", "Hiking", "Squash"] }, { name: "Snorkelling", options: ["Free", "Paid"] }, { name: "Telescope" }, { name: "Water sports", multiSelectOptions: ["Wind Surfing", "Pedalos", "Water Skiing", "Diving", "Fishing", "Water Slides", "Water Park", "Trainer"] }, { name: "Canoeing", options: ["Free", "Paid"] }, { name: "Skiing", multiSelectOptions: ["Trainer", "Equipment"] }, { name: "Jungle Safari", options: ["Free", "Paid"] }, { name: "Cycling" }],
//     5: [{ name: "Balcony/ Terrace" }, { name: "Fireplace", options: ["Outdoor", "Indoor", "Common"] }, { name: "Lawn" }, { name: "Library" }, { name: "Seating Area" }, { name: "Sun Deck" }, { name: "Verandah" }, { name: "Jacuzzi", options: ["For Women Only", "Available for couples"] }, { name: "Prayer Room" }, { name: "Living Room" }, { name: "Outdoor Furniture" }, { name: "Picnic area" }, { name: "Game Room" }, { name: "Sitout Area", options: ["Poolside Sit-out-area", "Seating Arrangement on the Lawn", "Verandah", "Balcony", "Patio"] }, { name: "Bonfire Pit" }],
//     6: [{ name: "Barbeque", options: ["Free", "Paid"] }, { name: "Cafe", options: ["24*7", "Limited Hours"] }, { name: "Coffee shop", options: ["24*7", "Limited Hours"] }, { name: "Dining Area" }, { name: "Kid's Menu" }, { name: "Bakery" }, { name: "Breakfast", options: "Indian Food Options Available" }],
//     7: [{ name: "Activity Centre" }, { name: "Reflexology" }, { name: "Yoga" }, { name: "Meditation Room" }],
//     8: [{ name: "Banquet" }, { name: "Business Center" }, { name: "Conference room" }, { name: "Photocopying" }, { name: "Fax service" }, { name: "Printer" }],
//     9: [{ name: "Massage", multiSelectOptions: ["Couple Massages", "Foot Massage"] }, { name: "Salon", multiSelectOptions: ["Waxing", "Hair Cut"] }, { name: "Spa", options: ["Free", "Paid"] }, { name: "Steam and Sauna", options: ["Free", "Paid"] }, { name: "Open air bath" }, { name: "Hammam", multiSelectOptions: ["For Woman Only", "Available for Couples"] }],

//     10: [{ name: "Security alarms" }, { name: "Security Guard" }, { name: "Carbon Monoxide Detector" }],
//     11: [{ name: "Shuttle Service", options: ["Free", "Paid"] }],
//     12: [{ name: "Events", multiSelectOptions: ["Live Band", "Live Singer", "Live Ghazal", "Live Music", "Puppet Show", "Magic", "Fire Show", "Karaoke", "Movies", "DJ", "Stand-up Comedy", "Folk Dance"] }, { name: "Pub" }, { name: "Professional Photography" }, { name: "Night Club" }, { name: "Beach club" }, { name: "Movie Room" }, { name: "Music System" }, { name: "Water Park" }],
//     13: [{ name: "Book shop" }, { name: "Souvenir shop" }, { name: "Jewellery Shop" }],
//     14: [{ name: "Casino", multiSelectOptions: ["Free Entry", "Paid Entry"] }, { name: "Indoor games", multiSelectOptions: ["Board Games", "Pool Table", "Air Hockey", "Dart", "Table Tennis", "Carrom Board", "Foosball", "Bowling", "Puzzles"] }],
//     15: [{ name: "Childcare service", multiSelectOptions: ["Babysitting", "Cribs"] }, { name: "Children's play area", multiSelectOptions: ["Books", "DVDs", "Swings", "Music", "Video Games"] }, { name: "Kids' Club" }, { name: "Strollers" }],
//     16: [{ name: "Pet bowls" }, { name: "Pet baskets" }],
//     17: [{ name: "ATM" }, { name: "Currency Exchange" }],
// };

export const roomAmenitiesSidebarOptions = [
    { id: 1, label: "Mandatory", amenitiesData: [
        { name: "Hairdryer" },
        { name: "Hot & Cold Water" },
        { name: "Toiletries", multiSelectOptions: ["Moisturiser", "Shampoo", "Conditioner", "Shower Gel", "Soap", "Comb", "Premium"] },
        { name: "TV", multiSelectOptions: ["Regional Channels", "Satellite Channels", "Flat Screen", "Pay-per-view", "Other OTT", "Netflix", "Cable", "Limited Channels", "Hotstar", "Non-Smart LCD", "Pay-per-view channels", "Non-Smart LED", "Smart TV", "LCD", "LED"] },
        { name: "Air Conditioning", options: ["Centralized", "Room controlled", "Temperature will be fixed as per Govt. Norms", "Window AC", "Split AC"] },
        { name: "Iron/Ironing Board" },
        { name: "Mineral Water", options: ["Free", "Paid"] },
        { name: "Kettle" },
        { name: "Closet" },
        { name: "Mini Bar", options: ["Free", "Paid"], multiSelectOptions: ["On Request"] },
        { name: "Telephone", options: ["International Calls", "Local"] },
        { name: "Work Desk" },
        { name: "Safe", options: ["Electronic"] },
        { name: "Bathroom", multiSelectOptions: ["Shared", "Private"] },
        { name: "Chair" }
    ] },
    { id: 2, label: "Popular with Guests", amenitiesData: [
        { name: "Interconnected Room" },
        { name: "Heater", options: ["Free", "Paid"], options: ["Oil Radiator Heater", "Electric heater", "Electric Blankets"] },
        { name: "Housekeeping", options: ["24 hours", "Limited duration", "Daily"] },
        { name: "In Room dining", options: ["24 hours", "Limited duration", "Indian Food Options Available"] },
        { name: "Laundry Service", options: ["Free", "Paid"] },
        { name: "Room service", options: ["24 hours", "Limited duration"] },
        { name: "Smoking Room" },
        { name: "Study Room" },
        { name: "Closet" },
        { name: "Wifi", options: ["Free", "Paid"], options: ["Speed Suitable for working", "Speed Suitable for Surfing", "Unreliable", "Available in lobby"] },
        { name: "Air Purifier" }
    ] },
    { id: 3, label: "Bathroom", amenitiesData: [
        { name: "Bathroom Phone" },
        { name: "Bathtub" },
        { name: "Bubble Bath" },
        { name: "Dental Kit" },
        { name: "Geyser/ Water heater" },
        { name: "Slippers" },
        { name: "Shower Cap" },
        { name: "Hammam" },
        { name: "Bathrobes" },
        { name: "Western Toilet Seat" },
        { name: "Shower cubicle" },
        { name: "Weighing Scale" },
        { name: "Shaving Mirror" },
        { name: "Sewing kit" },
        { name: "Bidet" },
        { name: "Toilet with grab rails" },
        { name: "Ensuite Bathroom/Common Bay", options: ["Yes", "No"] },
        { name: "Jetspray" }
    ] },
    { id: 4, label: "Room Features", amenitiesData: [
        { name: "Blackout curtains" },
        { name: "Center Table" },
        { name: "Charging points", multiSelectOptions: ["International Adapters"] },
        { name: "Couch" },
        { name: "Dining Table" },
        { name: "Fireplace" },
        { name: "Mini Fridge" },
        { name: "Sofa", multiSelectOptions: ["Sofa Chair", "Sofa cum Bed"] },
        { name: "Pillow menu" },
        { name: "Hypoallergenic Bedding" },
        { name: "Living Area" },
        { name: "Dining Area" },
        { name: "Seating Area" },
        { name: "Fireplace Guards" },
        { name: "Coffee Machine" },
        { name: "Jacuzzi" }
    ] },
    { id: 5, label: "Media and Entertainment", amenitiesData: [
        { name: "Smart Controls" },
        { name: "Sound Speakers" },
        { name: "Smartphone" }
    ] },
    { id: 6, label: "Food And Drinks", amenitiesData: [
        { name: "Cake", options: ["Free", "Paid"] },
        { name: "Fruit Basket", options: ["Free", "Paid"] },
        { name: "BBQ Grill", options: ["Free", "Paid"] },
        { name: "Cook & Butler Service", options: ["Free", "Paid"] }
    ] },
    { id: 7, label: "Kitchen and Appliances", amenitiesData: [
        { name: "Dishwasher", options: ["Free", "Paid"] },
        { name: "Induction" },
        { name: "Kitchenette", options: ["Private", "Shared"] },
        { name: "Refrigerator" },
        { name: "Washing machine" },
        { name: "Cook/Chef", options: ["Free", "Paid"] },
        { name: "Cooking Basics", multiSelectOptions: ["Pots", "Pens", "Cooking Oil", "Cooker", "Dishes", "Slverware", "Salt & Pepper", "Seasoning"] },
        { name: "Stove/Induction", options: ["LPG"] },
        { name: "Dishes and Silverware" },
        { name: "Toaster" },
        { name: "Microwave" },
        { name: "Rice Cooker" }
    ] },
    { id: 8, label: "Beds and Blanket", amenitiesData: [
        { name: "Blanket", multiSelectOptions: ["Woolen", "Electric"] }
    ] },
    { id: 9, label: "Safety and Security", amenitiesData: [
        { name: "Cupboards with locks" }
    ] },
    { id: 10, label: "Childcare", amenitiesData: [
        { name: "Child safety socket covers" }
    ] },
    { id: 11, label: "Other Facilities", amenitiesData: [
        { name: "Mosquito Net" },
        { name: "Newspaper" },
        { name: "Balcony", options: ["Private", "Shared"] },
        { name: "Jacuzzi" },
        { name: "Private Pool" },
        { name: "Terrace" },
        { name: "Fan", multiSelectOptions: ["Table", "Ceiling"] }
    ] }
];

// export const amenitiesData = {
//     1: [
//         {
//             name: "Hairdryer",

//         },
//         {
//             name: "Hot & Cold Water",
//         },
//         {
//             name: "Toiletries",
//             multiSelectOptions: ["Moisturiser", "Shampoo", "Conditioner", "Shower Gel", "Soap", "Comb", "Premium"]
//         },
//         {
//             name: "TV",
//             multiSelectOptions: ["Regional Channels", "Satellite Channels", "Flat Screen", "Pay-per-view", "Other OTT", "Netflix", "Cable", "Limited Channels", "Hotstar", "Non-Smart LCD", "Pay-per-view channels", "Non-Smart LED", "Smart TV", "LCD", "LED"]
//         },
//         {
//             name: "Air Conditioning",
//             options: ["Centralized", "Room controlled", "Temperature will be fixed as per Govt. Norms", "Window AC", "Split AC"]
//         },
//         {
//             name: "Iron/Ironing Board",
//         },
//         {
//             name: "Mineral Water",
//             options: ["Free", "Paid"]
//         },
//         {
//             name: "Kettle",
//         },
//         {
//             name: "Closet",
//         },
//         {
//             name: "Mini Bar",
//             options: ["Free", "Paid"],
//             multiSelectOptions: ["On Request"],
//         },
//         {
//             name: "Telephone",
//             options: ["International Calls", "Local"],
//         },
//         {
//             name: "Work Desk",
//         },
//         {
//             name: "Safe",
//             options: ["Electronic"],
//         },
//         {
//             name: "Bathroom",
//             multiSelectOptions: ["Shared", "Private"],
//         },
//         {
//             name: "Chair",
//         }
//     ],
//     2: [
//         {
//             name: "Interconnected Room",

//         },
//         {
//             name: "Heater",
//             options: ["Free", "Paid"],
//             options: ["Oil Radiator Heater", "Electric heater", "Electric Blankets"],
//         },
//         {
//             name: "Housekeeping",
//             options: ["24 hours", "Limited duration", "Daily"],
//         },
//         {
//             name: "In Room dining",
//             options: ["24 hours", "Limited duration", "Indian Food Options Available"],
//         },
//         {
//             name: "Laundry Service",
//             options: ["Free", "Paid"],
//         },
//         {
//             name: "Room service",
//             options: ["24 hours", "Limited duration",],
//         },
//         {
//             name: "Smoking Room",
//         },
//         {
//             name: "Study Room",
//         },
//         {
//             name: "Closet",
//         },
//         {
//             name: "Wifi",
//             options: ["Free", "Paid"],
//             options: ["Speed Suitable for working", "Speed Suitable for Surfing", "Unreliable", "Available in lobby"],
//         },
//         {
//             name: "Air Purifier",
//         },
//     ],
//     3: [
//         { name: "Bathroom Phone" },
//         { name: "Bathtub" },
//         { name: "Bubble Bath" },
//         { name: "Dental Kit" },
//         { name: "Geyser/ Water heater" },
//         { name: "Slippers" },
//         { name: "Shower Cap" },
//         { name: "Hammam" },
//         { name: "Bathrobes" },
//         { name: "Western Toilet Seat" },
//         { name: "Shower cubicle" },
//         { name: "Weighing Scale" },
//         { name: "Shaving Mirror" },
//         { name: "Sewing kit" },
//         { name: "Bidet" },
//         { name: "Toilet with grab rails" },
//         { name: "Ensuite Bathroom/Common Bay", options: ["Yes", "No"] },
//         { name: "Jetspray" }
//     ],
//     4: [
//         { name: "Blackout curtains" },
//         { name: "Center Table" },
//         { name: "Charging points", multiSelectOptions: ["International Adapters"] },
//         { name: "Couch" },
//         { name: "Dining Table" },
//         { name: "Fireplace" },
//         { name: "Mini Fridge" },
//         { name: "Sofa", multiSelectOptions: ["Sofa Chair", "Sofa cum Bed"] },
//         { name: "Pillow menu" },
//         { name: "Hypoallergenic Bedding" },
//         { name: "Living Area" },
//         { name: "Dining Area" },
//         { name: "Seating Area" },
//         { name: "Fireplace Guards" },
//         { name: "Coffee Machine" },
//         { name: "Jacuzzi" }
//     ],
//     5: [
//         { name: "Smart Controls" },
//         { name: "Sound Speakers" },
//         { name: "Smartphone" },
//     ],
//     6: [
//         { name: "Cake", options: ["Free", "Paid"] },
//         { name: "Fruit Basket", options: ["Free", "Paid"] },
//         { name: "BBQ Grill", options: ["Free", "Paid"] },
//         { name: "Cook & Butler Service", options: ["Free", "Paid"] },
//     ],
//     7: [
//         { name: "Dishwasher", options: ["Free", "Paid"] },
//         { name: "Induction", },
//         { name: "Kitchenette", options: ["Private", "Shared"] },
//         { name: "Refrigerator", },
//         { name: " Washing machine", },
//         { name: "Cook/Chef", options: ["Free", "Paid"] },
//         { name: "Cooking Basics", multiSelectOptions: ["Pots", "Pens", "Cooking Oil", "Cooker", "Dishes", "Slverware", "Salt & Pepper", "Seasoning"] },
//         { name: "Stove/Induction", options: ["LPG"] },
//         { name: "Dishes and Silverware", },
//         { name: "Toaster", },
//         { name: "Microwave", },
//         { name: "Rice Cooker", },
//     ],

//     8: [
//         { name: "Blanket", multiSelectOptions: ["Woolen", "Electric"] },
//     ],
//     9: [
//         { name: "Cupboards with locks", },
//     ],
//     10: [
//         { name: "Child safety socket covers", },
//     ],
//     11: [
//         { name: "Mosquito Net" },
//         { name: "Newspaper" },
//         { name: "Balcony", options: ["Private", "Shared"] },
//         { name: "Jacuzzi" },
//         { name: "Private Pool" },
//         { name: "Terrace" },
//         { name: "Fan", multiSelectOptions: ["Table", "Ceiling"] },
//     ],
// }
export const bedTypeOptions = [
    { label: "Select option", value: "" },
    { label: "Futon", value: "futon" },
    { label: "King", value: "king" },
    { label: "Murphy Bed", value: "murphy_bed" },
    { label: "Queen", value: "queen" },
    { label: "Sofa Bed", value: "sofa_bed" },
    { label: "Tatami Mats", value: "tatami_mats" },
    { label: "Twin", value: "twin" },
    { label: "Single", value: "single" },
    { label: "Full", value: "full" },
    { label: "Run of the House", value: "run_of_the_house" },
    { label: "Dorm Bed", value: "dorm_bed" }
];
export const roomViewOptions = [
    { label: "Select option", value: "" },
    { label: "Airport View", value: "airport" },
    { label: "Bay View", value: "bay" },
    { label: "City View", value: "city" },
    { label: "Garden View", value: "garden" },
    { label: "Courtyard View", value: "courtyard" },
    { label: "Lake View", value: "lake" },
    { label: "Ocean View", value: "ocean" },
    { label: "Pool View", value: "pool" },
    { label: "River View", value: "river" },
    { label: "Mountain View", value: "mountain" },
    { label: "Marina View", value: "marina" },
    { label: "Beach View", value: "beach" },
    { label: "Water View", value: "water" },
    { label: "Park View", value: "prk" },
    { label: "Forest View", value: "forest" },
    { label: "Rain Forest", value: "rain" },
    { label: "Various View", value: "various" },
    { label: "Limited View", value: "limited" },
    { label: "Slope View", value: "slope" },
    { label: "Slip View", value: "slip" },
    { label: "CountrySide View", value: "countrySide" },
    { label: "Sea View", value: "sea" },
    { label: "Valley View", value: "valley" },
];

export const hotelTypeOptions = [
    { label: "Select option", value: "" },
    { label: "Luxury", value: "luxury" },
    { label: "Premium", value: "premium" },
    { label: "Boutique", value: "boutique" },
];
export const locationSpecificationOptions = [
    {
        id: '1',
        label: "Select option",
    },
    {
        id: '2',
        label: "Distance from nearest bus terminal",
        distance: "11",
        unit: 'Km',
    },
    {
        id: '3',
        label: "Distance from nearest metro terminal",
        distance: "13",
        unit: 'Km',
    },
    {
        id: '4',
        label: "Distance from nearest railway terminal",
        distance: "14",
        unit: 'Km',
    },
    {
        id: '5',
        label: "Distance from nearest airport terminal",
        distance: "15",
        unit: 'Km',
    },
];

export const propertyRatingOptions = [
    { label: "Select option", value: "" },
    { label: "3 Star", value: "three-star" },
    { label: "4 Star", value: "four-star" },
    { label: "5 Star", value: "five-star" },
];

export const hotelLocationOptions = [
    { label: "Select option", value: "" },
    { label: "Hilly Area", value: "hilly-area" },
    { label: "Plain Area", value: "plain-area" },
];