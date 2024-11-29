import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: [], count: 0}

  submitAddButton = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      backgroundColor: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  inputNameElement = event => {
    this.setState({name: event.target.value})
  }

  inputCommentElement = event => {
    this.setState({comment: event.target.value})
  }

  taggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLike: !eachItem.isLike}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(comment => comment.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, commentsList, count} = this.state

    return (
      <div className="bg-container">
        <div className="form-container">
          <div>
            <h1 className="title">Comments</h1>
            <form className="form" onSubmit={this.submitAddButton}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                className="name-input"
                placeholder="Your Name"
                onChange={this.inputNameElement}
              />
              <textarea
                rows="8"
                className="comment-input"
                value={comment}
                placeholder="Your Comment"
                onChange={this.inputCommentElement}
              />
              <div>
                <button type="submit" className="btn">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="comments-container">
          <div className="count-comment-container">
            <div className="count-comment" role="status">
              {count}
            </div>
            <p className="para1">comments</p>
          </div>
          <ul className="comments-list-container">
            {commentsList.map(eachList => (
              <CommentItem
                key={eachList.id}
                eachList={eachList}
                taggleIsLike={this.taggleIsLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
