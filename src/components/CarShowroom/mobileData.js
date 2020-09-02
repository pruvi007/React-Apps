var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 2410;
var mobileList = [
  {
    name: "Realme C11",
    price: 10000,
    Brand: "Realme",
    RAM: "4",
    ROM: "16",
    OS: "Android",
    img: "https://i.ibb.co/HhxsQVD/Realmec1.jpg",
  },
  {
    name: "Poco M2 Pro",
    price: 15000,
    Brand: "Mi",
    RAM: "6",
    ROM: "32",
    OS: "Android",
    img:
      "https://i.ibb.co/K0JDVKT/poco-m2-pro-mzb9628in-original-imaftg8dbxfqhddh.jpg",
  },
  {
    name: "M30",
    price: 15000,
    Brand: "Samsung",
    RAM: "6",
    ROM: "64",
    OS: "Android",
    img:
      "https://i.ibb.co/VDYh2pq/samsung-galaxy-m30-sm-m305fskeins-original-imafh6u5ma3uxr3j.jpg",
  },
  {
    name: "M21",
    price: 10000,
    Brand: "Samsung",
    RAM: "4",
    ROM: "16",
    OS: "Android",
    img:
      "https://i.ibb.co/ZBS8Wn6/samsung-galaxy-m21-b07hgh8d2r34-original-imafsfexmr2nqszz.jpg",
  },
  {
    name: "A51",
    price: 20000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "256",
    OS: "Android",
    img:
      "https://i.ibb.co/4M0Tfyh/samsung-galaxy-a51-sm-a515fzkhins-original-imafzhr399hrsbzb.jpg",
  },
  {
    name: "A50",
    price: 19000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "128",
    OS: "Android",
    img:
      "https://i.ibb.co/4M0Tfyh/samsung-galaxy-a51-sm-a515fzkhins-original-imafzhr399hrsbzb.jpg",
  },
  {
    name: "M31s",
    price: 21000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "128",
    OS: "Android",
    img:
      "https://i.ibb.co/sC03k39/samsung-galaxy-m31-sm-m315fzkgins-original-imafpnrzzt9krr9a.jpg",
  },
  {
    name: "M01",
    price: 6000,
    Brand: "Samsung",
    RAM: "2",
    ROM: "16",
    OS: "Android",
    img:
      "https://i.ibb.co/FBpQKfh/samsung-galaxy-m01-sm-m015gzkdins-original-imafscggjk6twbh6.jpg",
  },
  {
    name: "iphone SE",
    price: 35000,
    Brand: "Apple",
    RAM: "4",
    ROM: "16",
    OS: "iOS",
    img:
      "https://i.ibb.co/1Lfy00C/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbq.jpg",
  },
  {
    name: "iphone 11 pro",
    price: 117100,
    Brand: "Apple",
    RAM: "8",
    ROM: "64",
    OS: "iOS",
    img:
      "https://i.ibb.co/TcN37SY/iphone-11-pro-max-64-b-mwhf2hn-a-apple-0-original-imafkg2ftqfvr9sf.jpg",
  },
  {
    name: "iphone 11",
    price: 68300,
    Brand: "Apple",
    RAM: "6",
    ROM: "64",
    OS: "iOS",
    img:
      "https://i.ibb.co/HgHpXXg/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpg",
  },
  {
    name: "Realme 6",
    price: 1300,
    Brand: "Realme",
    RAM: "3",
    ROM: "16",
    OS: "Android",
    img:
      "https://i.ibb.co/bdhdq5h/realme-6-rmx2001-original-imaftzgfyrnaj9wb.jpg",
  },
  {
    name: "Redmi 8",
    price: 8000,
    Brand: "Mi",
    RAM: "3",
    ROM: "32",
    OS: "Android",
    img:
      "https://i.ibb.co/bdhdq5h/realme-6-rmx2001-original-imaftzgfyrnaj9wb.jpg",
  },
  {
    name: "A5s",
    price: 7500,
    Brand: "oppo",
    RAM: "4",
    ROM: "64",
    OS: "Android",
    img:
      "https://i.ibb.co/dmJhCkM/mi-redmi-8a-dual-b07x1ktaa-original-imafp73gqsrtspkk.jpg",
  },
  {
    name: "note 7",
    price: 8000,
    Brand: "Mi",
    RAM: "6",
    ROM: "64",
    OS: "Android",
    img:
      "https://i.ibb.co/C5M47yQ/mi-redmi-note-7-pro-na-original-imafe4b62yeycjfq.jpg",
  },
  {
    name: "note 5 pro",
    price: 8000,
    Brand: "Mi",
    RAM: "6",
    ROM: "64",
    OS: "Android",
    img:
      "https://i.ibb.co/1K2YjLw/redmi-note-5-pro-na-original-imaf2ashnnbxxks5.jpg",
  },
  {
    name: "note 9",
    price: 8000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "56",
    OS: "Android",
    img:
      "https://i.ibb.co/RzNSQwZ/mi-redmi-note-9-b0784d862m-original-imafqy27hbtc37gv.jpg",
  },
  {
    name: "S10",
    price: 80000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "56",
    OS: "Android",
    img:
      "https://i.ibb.co/GtWwmXt/samsung-galaxy-s10-sm-g973fzbdins-original-imafdys4uccfgw2m.jpg",
  },
  {
    name: "f11 pro",
    price: 8000,
    Brand: "oppo",
    RAM: "8",
    ROM: "28",
    OS: "Android",
    img:
      "https://i.ibb.co/rf3D5Yc/f11-pro-128-d-cph1969-oppo-6-original-imafec8hzfzyg79e.jpg",
  },
  {
    name: "a9",
    price: 10000,
    Brand: "oppo",
    RAM: "6",
    ROM: "56",
    OS: "Android",
    img:
      "https://i.ibb.co/kMnXbB6/oppo-a9-2020-cph1937-original-imafkhhxczz79agw.jpg",
  },
  {
    name: "Realme2",
    price: 10000,
    Brand: "Realme",
    RAM: "3",
    ROM: "32",
    OS: "Android",
    img:
      "https://i.ibb.co/b7gH93z/realme-2-pro-rmx1801-original-imaf9e3vmfr9jewh.jpg",
  },
  {
    name: "A71",
    price: 33000,
    Brand: "Samsung",
    RAM: "8",
    ROM: "28",
    OS: "Android",
    img:
      "https://i.ibb.co/W5xGSdH/samsung-galaxy-a71-sm-a715fmswins-original-imaftvyfzzam.jpg",
  },
];
app.get("/mobile/details", function (req, res) {
  let page = req.query.page;
  let os = req.query.os;
  let ram = req.query.ram;
  let rom = req.query.rom;
  let brand = req.query.brand;

  let f = [];
  if (os !== undefined) f.push(["OS", os.split(",")]);
  if (ram !== undefined) f.push(["RAM", ram.split(",")]);
  if (rom !== undefined) f.push(["ROM", rom.split(",")]);
  if (brand !== undefined) f.push(["Brand", brand.split(",")]);
  console.log(f);
  let filteredData = mobileList;
  for (var i = 0; i < f.length; i++) {
    filteredData = filteredData.filter(function (mobile) {
      let key = f[i][0];
      let value = f[i][1];
      // console.log(key, mobile[key]);
      let present = value.find((val)=>val === mobile[key])
      if (present!==undefined) return mobile;
    });
  }
  // console.log(list);
  page = page === undefined ? 1 : +page;
  let result = pagination(filteredData, page);
  // console.log("Array ", result);
  res.json({
    page: page,
    items: result,
    totalItems: result.length,
    totalNum: filteredData.length,
  });
  // console.log(list);
});
function pagination(obj, page) {
  const postCount = obj.length;
  const perPage = 10;
  //const pageCount = Math.ceil(postCount / perPage);
  var resArr = obj;
  resArr = resArr.slice(page * 5 - 5, page * 5);
  return resArr;
}
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
