import './index.css'

const CategoryItem = props => {
  const {eachImgDetails, onClickEachImg} = props
  const {thumbnailUrl, id} = eachImgDetails

  const onClick = () => {
    onClickEachImg(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="img-btn" onClick={onClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default CategoryItem
