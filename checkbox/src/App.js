import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import { list } from "./data/list";

export default function App() {
  const [isChecked, setIsChecked] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const handleOnChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSelectAllChange = (event) => {
    const allChecked = event.target.checked;
    setSelectAll(allChecked);
    const newCheckedState = list.reduce(
      (acc, item) => ({ ...acc, [item.name]: allChecked }),
      {}
    );
    setIsChecked(newCheckedState);
  };

  return (
    <div>
      Select your favorite beer:
      <Checkbox
        name="selectAll"
        handleChange={handleSelectAllChange}
        checked={selectAll}
      />
      {list.map((item) => (
        <Checkbox
          key={item.id}
          item={item}
          handleChange={handleOnChange}
          checked={isChecked[item.name] || false}
        />
      ))}
    </div>
  );
}
