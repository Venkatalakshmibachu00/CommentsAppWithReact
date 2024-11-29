// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachList, taggleIsLike, deleteComment} = props
  const {id, name, comment, isLike, backgroundColor, date} = eachList

  const onClickLike = () => {
    taggleIsLike(id)
  }

  const onDeleteList = () => {
    deleteComment(id)
  }

  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="list-container">
      <div className="name-container">
        <div className={`letter ${backgroundColor}`}>{name.slice(0, 1)}</div>
        <p className="person-name">{name}</p>
        <p className="time">{postedTime} ago</p>
      </div>
      <p className="person-comment">{comment}</p>
      <div className="like-delete-container">
        <button
          type="button"
          onClick={onClickLike}
          className={isLike ? 'like-para' : 'unlike-para'}
        >
          <img className="like" src={likeImage} alt="like" />
          <p>Like</p>
        </button>
        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={onDeleteList}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
