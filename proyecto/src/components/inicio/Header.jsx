import Banner from './Banner'
import bannerInicio from '../../assets/images/banner-inicio.jpeg'

function Header() {
  return (
    <header className="header">
      <Banner imgUrl={bannerInicio} />
    </header>
  )
}

export default Header
