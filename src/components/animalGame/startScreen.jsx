import React, { Component } from "react";
import MainComp from "./main_comp";

class StartScreen extends Component {
  state = {
    images: [
      [
        { name: "./Animal/croc.svg", isOpen: 0, state: 0, cellNo: 0 },
        { name: "./Animal/elephant.svg", isOpen: 0, state: 0, cellNo: 1 },
        { name: "./Animal/giraffe.svg", isOpen: 0, state: 0, cellNo: 2 },
        { name: "./Animal/gorilla.svg", isOpen: 0, state: 0, cellNo: 3 },
        { name: "./Animal/koala.svg", isOpen: 0, state: 0, cellNo: 4 },
        { name: "./Animal/polar-bear.svg", isOpen: 0, state: 0, cellNo: 5 },
        { name: "./Animal/tiger.svg", isOpen: 0, state: 0, cellNo: 6 },
        { name: "./Animal/apatosaur.svg", isOpen: 0, state: 0, cellNo: 7 },
        { name: "./Animal/cat.svg", isOpen: 0, state: 0, cellNo: 8 },
        { name: "./Animal/dog.svg", isOpen: 0, state: 0, cellNo: 9 },
        { name: "./Animal/whale.svg", isOpen: 0, state: 0, cellNo: 10 },
        { name: "./Animal/pig.svg", isOpen: 0, state: 0, cellNo: 11 },
        { name: "./Animal/croc.svg", isOpen: 0, state: 0, cellNo: 12 },
        { name: "./Animal/elephant.svg", isOpen: 0, state: 0, cellNo: 13 },
        { name: "./Animal/giraffe.svg", isOpen: 0, state: 0, cellNo: 14 },
        { name: "./Animal/gorilla.svg", isOpen: 0, state: 0, cellNo: 15 },
        { name: "./Animal/koala.svg", isOpen: 0, state: 0, cellNo: 16 },
        { name: "./Animal/polar-bear.svg", isOpen: 0, state: 0, cellNo: 17 },
        { name: "./Animal/tiger.svg", isOpen: 0, state: 0, cellNo: 18 },
        { name: "./Animal/apatosaur.svg", isOpen: 0, state: 0, cellNo: 19 },
        { name: "./Animal/cat.svg", isOpen: 0, state: 0, cellNo: 20 },
        { name: "./Animal/dog.svg", isOpen: 0, state: 0, cellNo: 21 },
        { name: "./Animal/whale.svg", isOpen: 0, state: 0, cellNo: 22 },
        { name: "./Animal/pig.svg", isOpen: 0, state: 0, cellNo: 23 },
      ],
      [
        { name: "./Birds/b1.svg", isOpen: 0, state: 0, cellNo: 0 },
        { name: "./Birds/b2.svg", isOpen: 0, state: 0, cellNo: 1 },
        { name: "./Birds/b3.svg", isOpen: 0, state: 0, cellNo: 2 },
        { name: "./Birds/b4.svg", isOpen: 0, state: 0, cellNo: 3 },
        { name: "./Birds/b5.svg", isOpen: 0, state: 0, cellNo: 4 },
        { name: "./Birds/b6.svg", isOpen: 0, state: 0, cellNo: 5 },
        { name: "./Birds/b7.svg", isOpen: 0, state: 0, cellNo: 6 },
        { name: "./Birds/b8.svg", isOpen: 0, state: 0, cellNo: 7 },
        { name: "./Birds/b9.svg", isOpen: 0, state: 0, cellNo: 8 },
        { name: "./Birds/b10.svg", isOpen: 0, state: 0, cellNo: 9 },
        { name: "./Birds/b11.svg", isOpen: 0, state: 0, cellNo: 10 },
        { name: "./Birds/b12.svg", isOpen: 0, state: 0, cellNo: 11 },
        { name: "./Birds/b1.svg", isOpen: 0, state: 0, cellNo: 12 },
        { name: "./Birds/b2.svg", isOpen: 0, state: 0, cellNo: 13 },
        { name: "./Birds/b3.svg", isOpen: 0, state: 0, cellNo: 14 },
        { name: "./Birds/b4.svg", isOpen: 0, state: 0, cellNo: 15 },
        { name: "./Birds/b5.svg", isOpen: 0, state: 0, cellNo: 16 },
        { name: "./Birds/b6.svg", isOpen: 0, state: 0, cellNo: 17 },
        { name: "./Birds/b7.svg", isOpen: 0, state: 0, cellNo: 18 },
        { name: "./Birds/b8.svg", isOpen: 0, state: 0, cellNo: 19 },
        { name: "./Birds/b9.svg", isOpen: 0, state: 0, cellNo: 20 },
        { name: "./Birds/b10.svg", isOpen: 0, state: 0, cellNo: 21 },
        { name: "./Birds/b11.svg", isOpen: 0, state: 0, cellNo: 22 },
        { name: "./Birds/b12.svg", isOpen: 0, state: 0, cellNo: 23 },
      ],
      [
        { name: "./Emoticons/e1.svg", isOpen: 0, state: 0, cellNo: 0 },
        { name: "./Emoticons/e2.svg", isOpen: 0, state: 0, cellNo: 1 },
        { name: "./Emoticons/e3.svg", isOpen: 0, state: 0, cellNo: 2 },
        { name: "./Emoticons/e4.svg", isOpen: 0, state: 0, cellNo: 3 },
        { name: "./Emoticons/e5.svg", isOpen: 0, state: 0, cellNo: 4 },
        { name: "./Emoticons/e6.svg", isOpen: 0, state: 0, cellNo: 5 },
        { name: "./Emoticons/e7.svg", isOpen: 0, state: 0, cellNo: 6 },
        { name: "./Emoticons/e8.svg", isOpen: 0, state: 0, cellNo: 7 },
        { name: "./Emoticons/e9.svg", isOpen: 0, state: 0, cellNo: 8 },
        { name: "./Emoticons/e10.svg", isOpen: 0, state: 0, cellNo: 9 },
        { name: "./Emoticons/e11.svg", isOpen: 0, state: 0, cellNo: 10 },
        { name: "./Emoticons/e12.svg", isOpen: 0, state: 0, cellNo: 11 },
        { name: "./Emoticons/e1.svg", isOpen: 0, state: 0, cellNo: 12 },
        { name: "./Emoticons/e2.svg", isOpen: 0, state: 0, cellNo: 13 },
        { name: "./Emoticons/e3.svg", isOpen: 0, state: 0, cellNo: 14 },
        { name: "./Emoticons/e4.svg", isOpen: 0, state: 0, cellNo: 15 },
        { name: "./Emoticons/e5.svg", isOpen: 0, state: 0, cellNo: 16 },
        { name: "./Emoticons/e6.svg", isOpen: 0, state: 0, cellNo: 17 },
        { name: "./Emoticons/e7.svg", isOpen: 0, state: 0, cellNo: 18 },
        { name: "./Emoticons/e8.svg", isOpen: 0, state: 0, cellNo: 19 },
        { name: "./Emoticons/e9.svg", isOpen: 0, state: 0, cellNo: 20 },
        { name: "./Emoticons/e10.svg", isOpen: 0, state: 0, cellNo: 21 },
        { name: "./Emoticons/e11.svg", isOpen: 0, state: 0, cellNo: 22 },
        { name: "./Emoticons/e12.svg", isOpen: 0, state: 0, cellNo: 23 },
      ],
      [
        { name: "./Fruits/f1.svg", isOpen: 0, state: 0, cellNo: 0 },
        { name: "./Fruits/f2.svg", isOpen: 0, state: 0, cellNo: 1 },
        { name: "./Fruits/f3.svg", isOpen: 0, state: 0, cellNo: 2 },
        { name: "./Fruits/f4.svg", isOpen: 0, state: 0, cellNo: 3 },
        { name: "./Fruits/f5.svg", isOpen: 0, state: 0, cellNo: 4 },
        { name: "./Fruits/f6.svg", isOpen: 0, state: 0, cellNo: 5 },
        { name: "./Fruits/f7.svg", isOpen: 0, state: 0, cellNo: 6 },
        { name: "./Fruits/f8.svg", isOpen: 0, state: 0, cellNo: 7 },
        { name: "./Fruits/f9.svg", isOpen: 0, state: 0, cellNo: 8 },
        { name: "./Fruits/f10.svg", isOpen: 0, state: 0, cellNo: 9 },
        { name: "./Fruits/f11.svg", isOpen: 0, state: 0, cellNo: 10 },
        { name: "./Fruits/f12.svg", isOpen: 0, state: 0, cellNo: 11 },
        { name: "./Fruits/f1.svg", isOpen: 0, state: 0, cellNo: 12 },
        { name: "./Fruits/f2.svg", isOpen: 0, state: 0, cellNo: 13 },
        { name: "./Fruits/f3.svg", isOpen: 0, state: 0, cellNo: 14 },
        { name: "./Fruits/f4.svg", isOpen: 0, state: 0, cellNo: 15 },
        { name: "./Fruits/f5.svg", isOpen: 0, state: 0, cellNo: 16 },
        { name: "./Fruits/f6.svg", isOpen: 0, state: 0, cellNo: 17 },
        { name: "./Fruits/f7.svg", isOpen: 0, state: 0, cellNo: 18 },
        { name: "./Fruits/f8.svg", isOpen: 0, state: 0, cellNo: 19 },
        { name: "./Fruits/f9.svg", isOpen: 0, state: 0, cellNo: 20 },
        { name: "./Fruits/f10.svg", isOpen: 0, state: 0, cellNo: 21 },
        { name: "./Fruits/f11.svg", isOpen: 0, state: 0, cellNo: 22 },
        { name: "./Fruits/f12.svg", isOpen: 0, state: 0, cellNo: 23 },
      ],
      [
        { name: "./Social Media/s1.svg", isOpen: 0, state: 0, cellNo: 0 },
        { name: "./Social Media/s2.svg", isOpen: 0, state: 0, cellNo: 1 },
        { name: "./Social Media/s3.svg", isOpen: 0, state: 0, cellNo: 2 },
        { name: "./Social Media/s4.svg", isOpen: 0, state: 0, cellNo: 3 },
        { name: "./Social Media/s5.svg", isOpen: 0, state: 0, cellNo: 4 },
        { name: "./Social Media/s6.svg", isOpen: 0, state: 0, cellNo: 5 },
        { name: "./Social Media/s7.svg", isOpen: 0, state: 0, cellNo: 6 },
        { name: "./Social Media/s8.svg", isOpen: 0, state: 0, cellNo: 7 },
        { name: "./Social Media/s9.svg", isOpen: 0, state: 0, cellNo: 8 },
        { name: "./Social Media/s10.svg", isOpen: 0, state: 0, cellNo: 9 },
        { name: "./Social Media/s11.svg", isOpen: 0, state: 0, cellNo: 10 },
        { name: "./Social Media/s12.svg", isOpen: 0, state: 0, cellNo: 11 },
        { name: "./Social Media/s1.svg", isOpen: 0, state: 0, cellNo: 12 },
        { name: "./Social Media/s2.svg", isOpen: 0, state: 0, cellNo: 13 },
        { name: "./Social Media/s3.svg", isOpen: 0, state: 0, cellNo: 14 },
        { name: "./Social Media/s4.svg", isOpen: 0, state: 0, cellNo: 15 },
        { name: "./Social Media/s5.svg", isOpen: 0, state: 0, cellNo: 16 },
        { name: "./Social Media/s6.svg", isOpen: 0, state: 0, cellNo: 17 },
        { name: "./Social Media/s7.svg", isOpen: 0, state: 0, cellNo: 18 },
        { name: "./Social Media/s8.svg", isOpen: 0, state: 0, cellNo: 19 },
        { name: "./Social Media/s9.svg", isOpen: 0, state: 0, cellNo: 20 },
        { name: "./Social Media/s10.svg", isOpen: 0, state: 0, cellNo: 21 },
        { name: "./Social Media/s11.svg", isOpen: 0, state: 0, cellNo: 22 },
        { name: "./Social Media/s12.svg", isOpen: 0, state: 0, cellNo: 23 },
      ],
    ],
    view: -1,
    index: -1,
    locaSet: [],
  };

  handlePlay = (name) => {
    console.log(name);
    let images = this.state.images;
    let ind = -1;
    for (let i = 0; i < images.length; i++) {
      let imgName = images[i][0].name.split("/")[1];
      if (imgName === name) {
        ind = i;
        break;
      }
    }
    this.setState({ index: ind, view: 1 });
  };
  mainScreen() {
    return (
      <div className="container m-4" style={{ float: "right" }}>
        <div
          className="row bg-dark text-white col-10"
          style={{ padding: "5px" }}
        >
          <div className="col col-2"></div>
          <div className="col col-4">Game-Type</div>
          <div className="col col-4">Play</div>
        </div>
        {this.state.images.map((img) => (
          <div
            className="row bg-light text-black col-10"
            style={{ padding: "5px" }}
          >
            <div className="col col-2"></div>
            <div className="col col-4">{img[0].name.split("/")[1]}</div>
            <div className="col col-4">
              <button
                className="btn btn-success"
                onClick={() => this.handlePlay(img[0].name.split("/")[1])}
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  handleChangeState = () => {
    this.setState({ view: -1 });
  };

  gameScreen() {
    let ind = this.state.index;
    return (
      <MainComp
        data={this.state.images[ind]}
        changeState={() => this.handleChangeState()}
      ></MainComp>
    );
  }
  render() {
    let retVal;
    if (this.state.view === -1) retVal = this.mainScreen();
    else retVal = this.gameScreen();
    return retVal;
  }
}

export default StartScreen;
