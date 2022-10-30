// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="bloglist-container">
      <ul className="list-items-container">
        {blogsList.map(each => (
          <BlogItem each={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
