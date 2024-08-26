import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Encuentra todo en tecnología" />
    </div>
  );
};

export default App;
