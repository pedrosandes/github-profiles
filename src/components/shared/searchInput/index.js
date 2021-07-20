import './styles.css'

const SearchInput = ({onChange}) => {

  return (
    <>
      <input 
      id ="searchInput" 
      type="text"
      placeholder="Procurar perfil"
      onChange={onChange}
      />
    </>
  );
}

export default SearchInput