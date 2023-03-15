// COMPONENT FOR DISPLAYING EACH TASK

export const Task = (props) => {
  return (
    <div className='task' style={{ backgroundColor: props.complete ? "green" : "transparent" }}>
      <p className='tick'>⌜</p>
      <p className='taskItem' >{props.taskName}</p>
      <button className='compButt' onClick={() => props.completeTask(props.id)}>✓</button>
      <button className='mainButt' onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}
