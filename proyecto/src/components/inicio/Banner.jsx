import '../../styles/banner.css'

// eslint-disable-next-line react/prop-types
function Banner({ imgUrl, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgUrl})` }}>
      <h2 className="banner__title">{title}</h2>
    </div>
  )
}

export default Banner
