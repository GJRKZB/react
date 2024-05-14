import React from "react";

export default function Checkbox({ handleChange, checked, item = {} }) {
  return (
    <div>
      <label>{item.name || "Select All"}</label>
      <input
        type="checkbox"
        id={item.id}
        name={item.name || "selectAll"}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
