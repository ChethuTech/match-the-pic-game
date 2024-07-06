import './index.css'

const Thumbnail = props => {
  const {imageDetails, onClickThumbnail} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails
  const onClickTheThumbnail = () => {
    onClickThumbnail(id)
  }
  return (
    <li onClick={onClickTheThumbnail}>
      <button type="button">
        {' '}
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
