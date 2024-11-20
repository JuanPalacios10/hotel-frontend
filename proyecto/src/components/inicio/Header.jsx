import Secciones from '../menu-secciones/Secciones'
import Banner from './Banner'
import bannerInicio from '../../assets/images/inicio/banner-inicio.jpeg'

function Header({ title }) {
  return (
    <header className="header">
      <Secciones />
      <Banner imgUrl={bannerInicio} title={title} />
    </header>
  )
}

export default Header
