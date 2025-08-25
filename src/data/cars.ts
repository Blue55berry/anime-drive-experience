import Car1 from "./coupe-red.jpg";
import Car2 from "./hero-car.jpg";
import Car3 from "./sedan-silver.jpg";
import Car4 from "./suv-blue.jpg";

export interface CarModel {
  name: string;
  year: number;
  price: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  type: string;
  specs: { range: string; acceleration: string; power: string };
  color: string;
  price: string;
  description: string;
  history: string;
  models: CarModel[];
}

export const cars: Car[] = [
  {
    id: "coupe",
    name: "Red Coupe",
    type: "Luxury Sedan",
    specs: {
      range: "450 miles",
      acceleration: "3.2s 0-60",
      power: "680 HP",
    },
    color: "automotive-silver",
    price: "$89,000",
    image: Car1,
    description: "A sporty red coupe with agile handling and modern features.",
    history:
      "The Red Coupe has been a symbol of speed and style since its debut in 1995. Over the years, it has evolved with advanced technology and design.",
    models: [
      { name: "Coupe Classic", year: 2010, price: "$18,000" },
      { name: "Coupe Sport", year: 2018, price: "$25,000" },
      { name: "Coupe Turbo", year: 2025, price: "$32,000" },
    ],
  },
  {
    id: "sedan",
    name: "Silver Sedan",
    type: "Family Sedan",
    specs: {
      range: "400 miles",
      acceleration: "5.5s 0-60",
      power: "320 HP",
    },
    color: "silver",
    price: "$28,000",
    image: Car3,
    description: "A reliable silver sedan perfect for families and daily commutes.",
    history:
      "The Silver Sedan has been a family favorite since 2000, known for its comfort and safety features.",
    models: [
      { name: "Sedan Standard", year: 2012, price: "$15,000" },
      { name: "Sedan Deluxe", year: 2019, price: "$22,000" },
      { name: "Sedan Hybrid", year: 2025, price: "$28,000" },
    ],
  },
  {
    id: "suv",
    name: "Blue SUV",
    type: "SUV",
    specs: {
      range: "370 miles",
      acceleration: "6.0s 0-60",
      power: "400 HP",
    },
    color: "blue",
    price: "$40,000",
    image: Car4,
    description: "A spacious blue SUV built for adventure and comfort.",
    history:
      "The Blue SUV has dominated the off-road market since 2005, offering power and luxury in one package.",
    models: [
      { name: "SUV Base", year: 2015, price: "$22,000" },
      { name: "SUV Premium", year: 2021, price: "$30,000" },
      { name: "SUV Electric", year: 2025, price: "$40,000" },
    ],
  },
  {
    id: "hero",
    name: "Trap Car",
    type: "Classic",
    specs: {
      range: "250 miles",
      acceleration: "8.5s 0-60",
      power: "180 HP",
    },
    color: "green",
    price: "$35,000",
    image: Car2,
    description: "A classic car with a unique story and rugged charm.",
    history:
      "The Trap Car is an icon, known for its appearances in movies and its distinctive design. It has a cult following among car enthusiasts.",
    models: [
      { name: "Trap Classic", year: 1975, price: "$8,000" },
      { name: "Trap Restored", year: 2020, price: "$20,000" },
      { name: "Trap EV", year: 2025, price: "$35,000" },
    ],
  },
];
