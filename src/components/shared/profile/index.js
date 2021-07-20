import Repositorys from '../repository/index'
import './styles.css'

const Profile = ({data,repositorys}) => {
  const {login, avatar_url, followers, public_repos, bio} = data
  return (
      <div className="container-user">
         <div className="container-profile">
         <div className="container-img">
            <img src={avatar_url} alt="User avatar" className="profile-img" />
          </div>
        <div className="profile">
          <div className="profile-content">
            <span className="profile-name">{login}</span>
            {bio === null ? null : <span className="profile-bio">{bio}</span>}
            <span className="profile-followers"> {followers} Seguidores</span>
            <span className="profile-repo">{public_repos} repositórios públicos</span>
          </div>
        </div>
         </div>
        <Repositorys data={repositorys}/>
      </div>
  );
}

export default Profile