const Profile = (props) => {

  return (
    <>
      {props.data.map(({login, avatar_url, bio, followers, public_repos}) => {
        return (
          <div>
            <h1>{login}</h1>
            <img src={avatar_url} alt="" />
            <p>{bio}</p>
            <p>Seguidores: {followers}</p>
            <p>Repositórios públicos: {public_repos}</p>
          </div>
        );
      })}
    </>
  );
}

export default Profile