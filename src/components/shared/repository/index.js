import "./styles.css"

const Repositorys = (props) => {
  return (
    <div className="container-repositorys">
      {props.data.map(({name, svn_url, description}) => {
        return (
          <div className="repository" key={name}>
            <h1>{name}</h1>
            <p>Descrição:  {description === null ? 'Descrição não informada' : description}</p>
            <a className="link" href={svn_url} target='_blank' rel="author">Ir para repositório</a>
          </div>
        );
      })}
    </div>
  );
}

export default Repositorys;