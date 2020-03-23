import React from "react";
import "./OptionList.scss";

export default function OptionList({
  title = "",
  options = [],
  groupName = ""
}) {
  return (
    <div className="optionList">
      <h4>{title}</h4>
      {options.map(item => {
        return (
          <label key={item.value}>
            <input type="checkbox" name={groupName} value={item.value} />{" "}
            {item.display}
          </label>
        );
      })}
    </div>
  );
}
