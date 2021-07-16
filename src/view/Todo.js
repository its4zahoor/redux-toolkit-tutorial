import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, doneTodo, undoneTodo } from "../store/todo";

const TodoUI = (props) => {
  const { idsMap, ids, lastId } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      addTodo({
        id: lastId + 1,
        task: text,
        isDone: false,
      })
    );
    setText("");
  };

  const handleDone = (id) => {
    dispatch(doneTodo({ id }));
  };

  const handleUnDone = (id) => {
    dispatch(undoneTodo({ id }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="App">
      TODOs
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button disabled={!text} onClick={handleClick}>
          <i className="zmdi zmdi-hc-lg zmdi-plus" />
        </button>
      </div>
      {ids.length === 0 ? (
        <div>No Todos, Enjoy Your Day!!</div>
      ) : (
        <div>Total: {ids.length}</div>
      )}
      <ol>
        {ids.map((id, i) => {
          const { task, isDone } = idsMap?.[id];
          return (
            <li key={id}>
              <span
                style={{
                  textDecoration: isDone ? "line-through" : "",
                  color: isDone ? "#CCCCCC" : "initial",
                }}
              >
                {task}
              </span>
              {isDone ? (
                <button className="btn" onClick={() => handleUnDone(id)}>
                  <i className="zmdi zmdi-hc-2x zmdi-undo" />
                </button>
              ) : (
                <button className="btn" onClick={() => handleDone(id)}>
                  <i className="zmdi zmdi-hc-2x zmdi-check" />
                </button>
              )}
              <button className="btn" onClick={() => handleDelete(id)}>
                <i className="zmdi zmdi-hc-2x zmdi-delete" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoUI;
