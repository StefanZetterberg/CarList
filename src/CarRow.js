import React from 'react';

export default function CarRow(props) {
  return (
    <tr onClick={() => {props.viewCar(props.car.id)}}>
      <td>{props.car.brand}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td>
    </tr>
  );
}