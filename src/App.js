import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInput";
import TodoList2 from "./components/TodoList2";
import produce from "immer";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  /*const [todos, setTodos] = useState([
    { id: 1, text: "리액트의 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링해 보기", checked: true },
    { id: 3, text: "일정관리 앱 만들어 보기", checked: false },
  ]);
  */

  /* //기존
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(4); //다음 항목 추가를 위한 id값 저장 변수

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  
  const onToggle = useCallback((id) => {
  setTodos((todos) =>
    todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
  );
}, []);
 */
  /* 
  //immer사용 변형 (deep copy를 위해 사용 객체자체를 카피해서 deepcopy된 객체를 반환해서 불변성을 보장해줌)
  const nextId = useRef(1); //다음 항목 추가를 위한 id값 저장 변수
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  //form등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDfault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      //array에 새항목등록
      setData(
        produce((draft) => {
          draft.push(info);
        })
      );

      //form초기화
      setForm({
        name: "",
        username: "",
      });

      //nextID값 하나 증가해주기
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.splice(
          draft.findIndex((todo) => todo.id === id),
          1
        );
      })
    ); //id같은걸 찾아서 하나 잘라내기
  }, []);
 */
  /*const insertTodo = useCallback(
    (text) => {
      text !== "" &&
        setTodos(todos.concat({ id: nextId.current++, text, checked: false }));
    },
    [todos]
  );*/
  /* const removeTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  ); */
  /* const toggleTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  ); */

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onSubmit} />
      <TodoList2 todos={data} onRemove={onRemove} onToggle={onChange} />
    </TodoTemplate>
  );
};

export default App;
