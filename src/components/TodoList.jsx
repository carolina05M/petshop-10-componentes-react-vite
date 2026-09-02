import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function adicionarTarefa(event) {
    event.preventDefault();

    if (!task.trim()) return;

    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  }

  function alternarTarefa(index) {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  function removerTarefa(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="todo">
      <form onSubmit={adicionarTarefa} className="todo-form">
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={item.done ? "done" : ""}>
            <span onClick={() => alternarTarefa(index)}>{item.text}</span>
            <button onClick={() => removerTarefa(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;