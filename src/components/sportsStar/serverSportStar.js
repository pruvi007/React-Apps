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
var list = [
  {
    country: "India",
    name: "Virat Kohli",
    id: "1",
    sport: "Cricket",
    details: {
      DOb: "5 November 1988",
      Info:
        "Virat Kohli is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world.He plays for Royal Challengers Bangalore in the Indian Premier League (IPL), and has been the team captain since 2013. Since October 2017, he has been the top-ranked ODI batsman in the world and is currently 2nd in Test rankings with 926 points.[4] Among Indian batsmen, Kohli has the best ever Test rating (937 points), ODI rating (911 points) and T20I rating (897 points).",
    },
  },
  {
    country: "India",
    name: "MS Dhoni",
    id: "2",
    sport: "Cricket",
    details: {
      DOb: "7 July 1981",
      Info:
        "Mahendra Singh Dhoni commonly known as MS Dhoni, is an Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy. A right-handed middle-order batsman and wicket-keeper, Dhoni is one of the highest run scorers in One Day Internationals (ODIs) with more than 10,000 runs scored and is considered an effective 'finisher' in limited-overs formats.He is also regarded by some as one of the best wicket-keepers and captain in modern limited-overs international cricket.",
    },
  },
  {
    country: "India",
    name: "Rohit Sharma",
    id: "3",
    sport: "Cricket",
    details: {
      DOb: "30 April 1987",
      Info:
        "Rohit Gurunath Sharma  is an Indian international cricketer who plays for Mumbai in domestic cricket and captains Mumbai Indians in the Indian Premier League as a right-handed batsman and an occasional right-arm off break bowler. He is the vice-captain of the Indian national team in limited-overs formats.",
    },
  },
  {
    country: "Australia",
    name: "David Warner",
    id: "4",
    sport: "Cricket",
    details: {
      DOb: "27 October 1986",
      Info:
        "David Andrew Warner is an Australian international cricketer and a former captain of the Australian national team in limited overs cricket.A left-handed opening batsman, Warner is the first Australian cricketer in 132 years to be selected for a national team in any format without experience in first-class cricket. He plays for New South Wales and the Sydney Thunder in domestic cricket. He served as the Australian vice-captain across Test and ODI formats of the game between 2015 and 2018.",
    },
  },
  {
    country: "Portugal",
    name: "Cristiano Ronaldo",
    id: "5",
    sport: "Football",
    details: {
      DOb: "5 February 1985",
      Info:
        "Cristiano Ronaldo dos Santos Aveiro GOIH ComM  is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time,Ronaldo has won five FIFA Ballon d'or/Best FIFA Men's Player awards,the most for a European player, and four European Golden Shoes",
    },
  },
  {
    country: "Argentina",
    name: "Lionel Messi",
    id: "6",
    sport: "Football",
    details: {
      DOb: "24 June 1987",
      Info:
        "Lionel Andrés Messi Cuccittini is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six FIFA Ballon d'or/Best FIFA Men's Player awards, and a record six European Golden Shoes.",
    },
  },
  {
    country: "Brazil",
    name: "Neymar Jr.",
    id: "7",
    sport: "Football",
    details: {
      DOb: "5 February 1992",
      Info:
        "Neymar da Silva Santos Júnior , commonly known as Neymar Jr. or simply Neymar, is a Brazilian professional footballer who plays as a forward for French club Paris Saint-Germain and the Brazil national team.",
    },
  },
  {
    country: "France",
    name: "Kylian Mbappe",
    id: "8",
    sport: "Football",
    details: {
      DOb: "20 December 1998",
      Info:
        "Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team. Considered one of the best players in the world, he is known for his finishing, dribbling, and speed. He is considered the world's most expensive player from a transfer value perspective by the CIES.",
    },
  },
];
app.get("/sporticons/stars/:sportName?", function (req, res) {
  let name = req.params.sportName;
  let arr = list.filter((obj) => obj.sport === name);
  let dispList = name === undefined ? list : arr;
  res.send(dispList);
});
app.get("/sporticons/details/:id", function (req, res) {
  let id = req.params.id;
  let obj = list.find((obj1) => {
    if (+obj1.id === +id) return true;
  });
  if (obj) res.send(obj);
  res.send("not found");
});
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
