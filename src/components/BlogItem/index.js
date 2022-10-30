// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props

  const {title, description, publishedDate} = each

  return (
    <li className="item">
      <div className="title-cont">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="desc">{description}</p>
    </li>
  )
}

export default BlogItem
