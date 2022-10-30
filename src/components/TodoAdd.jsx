import React from "react";

const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="description"
        onChange="Learn PHP"
        placeholder="what to do"
      />
      <button type="submit" className="btn-add">
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
