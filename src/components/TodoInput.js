import React, { useCallback, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInput.scss";

const TodoInput = ({ onInsert }) => {
  const [text, setText] = useState("");

  const focusTarget = useRef(null);

  const changeHandler = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      onInsert(text);
      setText("");
      focusTarget.current.focus();
    },
    [onInsert, text]
  );

  return (
    <form className="TodoInput" onSubmit={submitHandler}>
      <input
        ref={focusTarget}
        type="text"
        value={text}
        onChange={changeHandler}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
