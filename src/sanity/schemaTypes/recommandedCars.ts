export const recommandedCars = {
  name: "RecommandedCarsDocument",
  type: "document",
  title: "Recommended Cars Document", 
  fields: [
    {
      name: "cars",
      type: "array",
      title: "Cars",
      of: [
        {
          type: "object",
          title: "Car",
          fields: [
            { name: "name", type: "string", title: "Car Name" },
            { name: "type", type: "string", title: "Car Type" },
            { name: "image", type: "image", title: "Car Image" },
            { name: "fuelCapacity", type: "string", title: "Fuel Capacity" },
            { name: "transmission", type: "string", title: "Transmission" },
            { name: "seatingCapacity", type: "string", title: "seatingCapacity" },
            { name: "pricePerDay", type: "string", title: "pricePerDay" },
            {
              name: "originalPrice",
              type: "number",
              title: "Original Price",
              options: {
                isNullable: true, // Making the field nullable
              },
            },
          ],
        },
      ],
    },
  ],
};
