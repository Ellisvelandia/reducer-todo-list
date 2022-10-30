import React from "react";
import { RiEditFill } from "react-icons/ri";

const TodoUpdate = () => {
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="description"
        onChange="Learn PHP"
        placeholder="what to do"
      />
      <button type="submit" className="btn-edit">
        <RiEditFill />
      </button>
    </form>
  );
};

export default TodoUpdate;
