import {
  template,
  popup,
  popupHeader,
  popupMain,
  profileItem,
  logOut
} from '../styles/profile.module.css'
import { ProfileCard } from './ProfileCard'
import { useUserContext } from '../context/UserContext'
import { initialState } from '../constants/userState'
import { ProfileIcon } from './ProfileIcon'

export const Profile = () => {
  const { user, setUser } = useUserContext()

  const handleLogOut = () => {
    setUser(initialState)
    window.localStorage.removeItem('user')
  }

  return (
    <div className={template}>
      <div tabIndex={0} className={popup}>
        <div className={popupHeader}>
          <span>{user.username}</span>
          <ProfileIcon />
        </div>
        <div className={popupMain}>
          <ProfileCard>
            <li className={profileItem}>Perfil</li>
            <li className={profileItem}>Reservas</li>
            <li className={profileItem}>
              <button type="button" className={logOut} onClick={handleLogOut}>
                Cerrar sesión
              </button>
            </li>
          </ProfileCard>
        </div>
      </div>
    </div>
  )
}
