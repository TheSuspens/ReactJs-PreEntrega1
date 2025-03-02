const ItemListContainer = ({ mensajeBienvenida }) => {
  return (
    <div className="item-list-container">
      <h2>{mensajeBienvenida}</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ybo9WC8oyto?si=tdURH-NPayjjEZdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default ItemListContainer;


