function AddTask({ taskList, setTaskList, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updateTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          value={task.name || ""}
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update":"Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;
