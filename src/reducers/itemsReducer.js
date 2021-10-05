const items = [
  {
    id: 1,
    itemName: "Smart Hub",
    price: 49.99,
  },
  {
    id: 2,
    itemName: "Motion Sensor",
    price: 24.99,
  },
  {
    id: 3,
    itemName: "Wireless Camera",
    price: 99.99,
  },
  {
    id: 4,
    itemName: "Smoke Sensor",
    price: 19.99,
  },
  {
    id: 5,
    itemName: "Water Leak Sensor",
    price: 14.99,
  },
];

const itemsReducer = (state = items, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default itemsReducer;
