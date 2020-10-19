import React from "react";
import "./App.css";
import CarList from "./CarList";
import CarView from "./CarView";

export default class App extends React.Component {
  state = {
    maxId: 5,
    viewedCarId: null,
    newCar: false,
    carList: [
      { brand: "Saab", model: "900 Turbo", year: "1992", id: 1 },
      { brand: "Volvo", model: "745 GL", year: "1988", id: 2 },
      { brand: "BMW", model: "525i", year: "2001", id: 3 },
      { brand: "Nissan", model: "Leaf", year: "2012", id: 4 },
      { brand: "Fiat", model: "Uno", year: "1985", id: 5 },
    ],
  };

  sortBrand = () => {
    this.setState((state) => ({
      carList: state.carList.sort((c1, c2) => {
        return c1.brand > c2.brand ? 1 : -1;
      }),
    }));
  };

  sortModel = () => {
    this.setState((state) => ({
      carList: state.carList.sort((c1, c2) => {
        return c1.model > c2.model ? 1 : -1;
      }),
    }));
  };

  sortYear = () => {
    this.setState((state) => ({
      carList: state.carList.sort((c1, c2) => {
        return c1.year > c2.year ? 1 : -1;
      }),
    }));
  };

  setViewedCar = (id) => {
    this.setState((state) => ({
      viewedCarId: id,
    }));
  };

  updateCar = (car) => {
    console.log(car);
    let newCarList = this.state.carList.filter((oldCar) => {
      return oldCar.id !== car.id;
    });
    this.setState((state) => ({
      carList: [...newCarList, car],
    }));
  };

  createCar = (car) => {
    console.log(car);
    this.setState((state) => ({
      carList: [...state.carList, car],
      maxId: state.maxId+1,
      newCar: false,
    }));
  };

  render() {
    return (
      <div className="App">
        <div>
          <CarList
            list={this.state.carList}
            sortBrand={this.sortBrand}
            sortModel={this.sortModel}
            sortYear={this.sortYear}
            viewCar={this.setViewedCar}
          />
          <button
            onClick={() => {
              this.setState({ newCar: true });
            }}
          >
            Ny bil
          </button>
        </div>
        {this.state.viewedCarId ? (
          <CarView
            car={this.state.carList.find((car) => {
              return car.id === this.state.viewedCarId;
            })}
            updateCar={this.updateCar}
          />
        ) : null}
        {this.state.newCar ? (
          <CarView
            car={{
              brand: "",
              model: "",
              year: 2020,
              id: this.state.maxId + 1,
            }}
            createCar={this.createCar}
          />
        ) : null}
      </div>
    );
  }
}
