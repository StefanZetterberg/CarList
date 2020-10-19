import React, {useState} from 'react';

export default function CarView(props) {
  const [brand, setBrand] = useState(props.car.brand);
  const [model, setModel] = useState(props.car.model);
  const [year, setYear] = useState(props.car.year);

  return (
    <React.Fragment>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </label>
      {props.updateCar ? (
      <button
        onClick={() => {
          props.updateCar({
            brand: brand,
            model: model,
            year: year,
            id: props.car.id,
          });
        }}
      >
        Uppdatera
      </button>) : (
      <button
        onClick={() => {
          props.createCar({
            brand: brand,
            model: model,
            year: year,
            id: props.car.id,
          });
        }}
      >
        Skapa
      </button>        
      )}
    </React.Fragment>
  );
}