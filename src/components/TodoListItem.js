import React, { useCallback } from "react";
import cn from "classnames";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
//import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
  /* const { text, checked } = todo;

  const clickHandler = useCallback(() => {
    onRemove(todo.id);
  }, [onRemove, todo]);

  const toggleHandler = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo]);

  return (
    <div className="todoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn("checkbox", { checked })} onClick={toggleHandler}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={clickHandler}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  ); */
};

export default React.memo(TodoListItem);
