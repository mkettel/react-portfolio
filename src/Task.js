// COMPONENT FOR DISPLAYING EACH TASK

export const Task = (props) => {
  return (
    <div className='task'>
      <p className='tick'>⌜</p>
      <p className='taskItem' style={{ backgroundColor: props.complete ? "green" : "transparent" }} >{props.taskName}</p>
      <button className='mainButt' onClick={() => props.deleteTask(props.id)}>X</button>
      <button className='mainButt' onClick={() => props.completeTask(props.id)}>✓</button>
    </div>
  )
}
