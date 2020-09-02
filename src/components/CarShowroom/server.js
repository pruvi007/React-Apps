var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
const port = 2410;
let carMaster = [
  {
    model: "Swift Dzire VXi",
    make: "Maruti",
    fuel: "Diesel",
    colors: ["White", "Silver Grey", "Metallic Blue", "Red"],
    type: "Sedan",
    transmission: "Manual",
  },
  {
    model: "Etios SMi",
    make: "Toyota",
    fuel: "Diesel",
    colors: ["White", "Steel Grey", "Black"],
    type: "Hatchback",
    transmission: "Manual",
  },
  {
    model: "City AXi",
    make: "Honda",
    fuel: "Petrol",
    colors: ["Silver Grey", "Metallic Blue", "Black"],
    type: "Sedan",
    transmission: "Automatic",
  },
  {
    model: "Swift DXi",
    make: "Maruti",
    fuel: "Diesel",
    colors: ["White", "Red", "Black"],
    type: "Hatchback",
    transmission: "Manual",
  },
  {
    model: "Etios VXi",
    make: "Toyota",
    fuel: "Diesel",
    colors: ["White", "Silver Grey", "Black"],
    type: "Sedan",
    transmission: "Manual",
  },
  {
    model: "City ZXi",
    make: "Honda",
    fuel: "Petrol",
    colors: ["Silver Grey", "Metallic Blue", "Red"],
    type: "Sedan",
    transmission: "Manual",
  },
];

let cars = [
  {
    id: "ABR12",
    price: 400000,
    year: 2015,
    kms: 25000,
    model: "Swift Dzire VXi",
    color: "White",
  },
  {
    id: "CBN88",
    price: 480000,
    year: 2012,
    kms: 75000,
    model: "Etios SMi",
    color: "Steel Grey",
  },
  {
    id: "XER34",
    price: 300000,
    year: 2013,
    kms: 55000,
    model: "City AXi",
    color: "Metallic Blue",
  },
  {
    id: "MPQ29",
    price: 400000,
    year: 2015,
    kms: 25000,
    model: "Swift DXi",
    color: "Black",
  },
  {
    id: "PYQ88",
    price: 480000,
    year: 2012,
    kms: 75000,
    model: "Etios VXi",
    color: "White",
  },
  {
    id: "DFI61",
    price: 300000,
    year: 2013,
    kms: 55000,
    model: "City ZXi",
    color: "Red",
  },
  {
    id: "JUW88",
    price: 400000,
    year: 2015,
    kms: 25000,
    model: "Swift Dzire VXi",
    color: "White",
  },
  {
    id: "KPW09",
    price: 285000,
    year: 2012,
    kms: 76321,
    model: "Swift Dzire VXi",
    color: "White",
  },
  {
    id: "NHH09",
    price: 725000,
    year: 2018,
    kms: 15000,
    model: "City ZXi",
    color: "Silver Grey",
  },
  {
    id: "CTT26",
    price: 815000,
    year: 2016,
    kms: 42500,
    model: "City AXi",
    color: "Metallic Blue",
  },
  {
    id: "VAU55",
    price: 345000,
    year: 2014,
    kms: 81559,
    model: "Swift DXi",
    color: "Red",
  },
  {
    id: "BTR31",
    price: 184000,
    year: 2011,
    kms: 120833,
    model: "Etios VXi",
    color: "Silver Grey",
  },
];

// API-Endpoints
app.get("/cars", function (req, res) {
  // let minPrice = 0,maxPrice = 10000001;
  let minPrice = req.query.minprice;
  let maxPrice = req.query.maxprice;
  let fuel = req.query.fuel;
  let type = req.query.type;
  let sort = req.query.sort;
  let arr = cars;
  if (minPrice === undefined) minPrice = 0;
  if (maxPrice === undefined) maxPrice = 10000001;
  if (fuel === undefined) fuel = "NA";
  if (type === undefined) type = "NA";
  if (sort === undefined) sort = "NA";
  minPrice = parseInt(minPrice);
  maxPrice = parseInt(maxPrice);
  let obj = arr.filter(function (car) {
    if (car.price >= minPrice && car.price <= maxPrice) return car;
  });
  let models = carMaster;
  if (fuel !== "NA") {
    models = carMaster.filter(function (model) {
      if (model.fuel === fuel) return model;
    });
  }
  if (type !== "NA") {
    models = carMaster.filter(function (model) {
      if (model.type === type) return model;
    });
  }

  let result = [];
  for (var i = 0; i < obj.length; i++) {
    for (var j = 0; j < models.length; j++) {
      if (obj[i].model === models[j].model) {
        result.push(obj[i]);
        break;
      }
    }
  }
  if (sort !== "NA") {
    result = result.sort(function (a, b) {
      return a[sort] - b[sort];
    });
  }
  console.log(minPrice, maxPrice, fuel, type);
  res.send(result);
});

app.get("/cars/:id", function (req, res) {
  let id = req.params.id;
  let obj = cars.find((car) => car.id === id);
  if (obj) res.send(obj);
  else res.send("Invalid ID.");
});

app.get("/carmaster", function (req, res) {
  res.send(carMaster);
});

app.get("/cars/:id", function (req, res) {
  let id = req.params.id;
  let obj = cars.find((car) => car.id === id);
  if (obj) res.send(obj);
  else res.send("Invalid ID.");
});

app.post("/cars", function (req, res) {
  /*
    id: "ABR12",
    price: 400000,
    year: 2015,
    kms: 25000,
    model: "Swift Dzire VXi",
    color: "White",
  */

  const car = {
    id: req.body.id,
    price: req.body.price,
    year: req.body.year,
    kms: req.body.kms,
    model: req.body.model,
    color: req.body.color,
  };

  // add this to cars list
  cars.push(car);
  console.log("Car added Successfully");
  console.log(cars);
  res.send(car);
});

app.put("/cars/:id", function (req, res) {
  // console.log(req);
  let id = req.params.id;
  // console.log(id);
  let obj = cars.find((car) => car.id === id);
  if (obj === undefined) res.send("Invalid ID");
  else {
    const car = {
      id: req.body.id,
      price: req.body.price,
      year: req.body.year,
      kms: req.body.kms,
      model: req.body.model,
      color: req.body.color,
    };
    let index = cars.indexOf(obj);
    cars[index] = car;
    console.log("Updated id:" + id);
    res.send(car);
  }
});

app.delete("/cars/:id", function (req, res) {
  let id = req.params.id;
  // console.log(id);
  let obj = cars.find((car) => car.id === id);
  if (obj === undefined) res.send("Invalid ID");
  else {
    let index = cars.indexOf(obj);
    cars.splice(index, 1);
    console.log("Successfully Deleted car :" + id);
    res.send("Successfully Deleted car :" + id);
  }
});
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
