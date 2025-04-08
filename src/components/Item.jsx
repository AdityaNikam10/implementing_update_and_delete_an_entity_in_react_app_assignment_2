import React from "react";
import PropTypes from "prop-types";

const Item = ({ item, deleteItem }) => {
  return (
    <div>
      <p>{item.name}</p> {/* Assuming the item has a 'name' property */}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
};

// PropTypes validation
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Item;
