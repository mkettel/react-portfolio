// COMPONENT FOR DISPLAYING EACH TASK

export const Task = (props) => {
  return (
    <div className='task'>
      <p className='tick'>⌜</p>
      <p className='taskItem'>{props.taskName}</p>
      <button className='mainButt' onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}
