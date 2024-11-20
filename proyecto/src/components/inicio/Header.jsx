import Banner from './Banner'
import bannerInicio from '../../assets/images/inicio/banner-inicio.jpeg'

function Header() {
  return (
    <header className="header">
      <Banner imgUrl={bannerInicio} />
    </header>
  )
}

export default Header
