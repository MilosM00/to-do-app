export default function AddTask({toDoList, setToDoList, task, setTask}){
    function handleSubmit(e){
        e.preventDefault();

        if(task.id)
        {
            const date = new Date();

            const updateToDoList = toDoList.map((toDo) => {
                return(
                    toDo.id === task.id ? {id: task.id, name: task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : toDo
                );
            });

            setToDoList(updateToDoList);
            setTask({});
        }

        else
        {
            const date = new Date();
            const newTask = {id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
            setToDoList([...toDoList, newTask]);
            setTask({});
        }

    };


    return(
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={task.name || ""}
                    autoComplete="off"
                    placeholder="Add task here..."
                    maxLength="25"
                    onChange={e => setTask({...task, name:e.target.value})}
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    );
};