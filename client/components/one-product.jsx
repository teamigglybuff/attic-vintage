import React from 'react';
import { BrowserRouter as Router, Route, useParams, Link } from 'react-router-dom';


function OneProduct(props) {
  const { nameOfItem, price, imageLink, id } = props;

  return (
    <div className="oneProduct" style={divStyle}>
      <Link to={`/products/${id}`}>
        <img src={imageLink} alt={nameOfItem} width='200'/>
      </Link>
      <Link to={`/products/${id}`}>
        <p className="description">{nameOfItem}</p>
      </Link>
      <p>{price}</p>
    </div>
  );
}

const divStyle = {
  maxWidth: '200px',
  padding: '10px',
  border: 'solid black 1px',
  borderRadius: '3px',
  fontFamily: 'sans-serif',
}

export default OneProduct;
