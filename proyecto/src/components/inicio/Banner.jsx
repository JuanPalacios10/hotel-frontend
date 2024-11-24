import '../../styles/banner.css'

function Banner({ imgUrl, children }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgUrl})` }}>
      <h2 className="banner__title">{children}</h2>
    </div>
  )
}

export default Banner
