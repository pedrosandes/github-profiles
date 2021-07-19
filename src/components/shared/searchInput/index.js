import './styles.css'

const SearchInput = (props) => {

  return (
    <>
      <input 
      id ="searchInput" 
      type="text"
      placeholder="Procurar perfil"
      onChange={props.onChange}
      />
    </>
  );
}

export default SearchInput