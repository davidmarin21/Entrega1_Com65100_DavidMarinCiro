
const ItemListContainer = ({ mensaje }) => {
  return (
    <div style={styles.container}>
      <h2>{mensaje}</h2>
      {/* Aquí se mostrará la lista de productos en el futuro */}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  }
};

export default ItemListContainer;
