import React from "react";

const GamesFilter = ({ onSelectSortOrder, sortOrder }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <select
      className="form-select"
      onChange={(e) => onSelectSortOrder(e.target.value)}
      value={sortOrder}
    >
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.value === sortOrder ? `Order by: ${order.label}` : order.label}
        </option>
      ))}
    </select>
  );
};

export default GamesFilter;
