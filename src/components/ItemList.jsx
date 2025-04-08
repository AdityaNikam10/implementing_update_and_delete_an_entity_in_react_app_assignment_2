import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items, deleteItem }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </>
  );
};

//PropTypes validation
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemList;
