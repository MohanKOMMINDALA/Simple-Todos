// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteUserFromUserList} = props

  const {title, id} = eachTodo

  const onDeleteUser = () => {
    onDeleteUserFromUserList(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" onClick={onDeleteUser}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
