import React from 'react';
import CarRow from './CarRow';

export default function CarList(props) {
  return (
    <table border={2}>
      <thead>
        <tr>
          <th
            onClick={() => {
              props.sortBrand();
            }}
          >
            Brand
          </th>
          <th
            onClick={() => {
              props.sortModel();
            }}
          >
            Model
          </th>
          <th
            onClick={() => {
              props.sortYear();
            }}
          >
            Year
          </th>
        </tr>
      </thead>
      <tbody>
      {props.list.map((car, index) => {
        return <CarRow car={car} key={index} viewCar={props.viewCar}/>
      })}
      </tbody>
    </table>
  );
}