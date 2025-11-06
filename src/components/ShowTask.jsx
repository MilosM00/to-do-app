export default function ShowTask({toDoList, setToDoList, task, setTask}){
    function handleEdit(id){
        const selectedTask = toDoList.find(toDo => toDo.id === id);
        setTask(selectedTask);
    };

    function handleDelete(id){
        const updatedToDoList = toDoList.filter(toDo => toDo.id !== id);
        setToDoList(updatedToDoList);
    };

    return(
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">To Do</span>
                    <span className="count">{toDoList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setToDoList([])}>Clear All</button>
            </div>

            <ul>
                { toDoList.map((toDo) => {
                    return(
                        <li key={toDo.id}>
                            <p>
                                <span className="name">{toDo.name}</span>
                                <span className="time">{toDo.time}</span>
                            </p>
                            
                            <i className="bi bi-pencil-square" onClick={() => handleEdit(toDo.id)}></i>
                            <i className="bi bi-trash" onClick={() => handleDelete(toDo.id)}></i>
                        </li>
                    )
                }) }
            </ul>
        </section>
    );
}