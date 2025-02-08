export default {
    name: "order",
    title: "Order",
    type: "document", // Use 'document' for top-level entries
    fields: [
      { name: "customerName", title: "Customer Name", type: "string" },
      { name: "phoneNumber", title: "Phone Number", type: "string" },
      { name: "town", title: "Town", type: "string" },
      { name: "city", title: "City", type: "string" },
      { name: "pickupLocation", title: "Pickup Location", type: "string" },
      { name: "pickupDate", title: "Pickup Date", type: "date" },
      { name: "pickupTime", title: "Pickup Time", type: "string" },
      { name: "dropoffLocation", title: "Dropoff Location", type: "string" },
      { name: "dropoffDate", title: "Dropoff Date", type: "date" },
      { name: "dropoffTime", title: "Dropoff Time", type: "string" },
      { name: "paymentMethod", title: "Payment Method", type: "string" },
      {
        name: 'carDetails',
        type: 'object',
        title: 'Car Details',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'price', type: 'string', title: 'Price' },
          { name: 'image', type: 'string', title: 'Image URL' },
        ],
      }, 
         {
        name: 'carDetails',
        type: 'object',
        title: 'Car Details',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'price', type: 'string', title: 'Price' },
          { name: 'image', type: 'string', title: 'Image URL' },
        ],
      },
    ],
  };
  