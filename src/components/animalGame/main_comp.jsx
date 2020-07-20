import React, { Component } from "react";
import ImageCell from "./imageCell";
import NavBar from "./navBar";
class MainComp extends Component {
  state = {
    images: this.props.data,
    chhosenSet: [],
    gameState: "",
    btnState: "RESET GAME",
    clicks: 0,
    start: 0,
  };

  allCellsBlack() {
    let c = 0;
    this.state.images.map(function (p) {
      if (p.state === 1) c += 1;
    });
    console.log(c);
    if (c === this.state.images.length) return true;
    return false;
  }
  check() {
    let localSet = this.state.chhosenSet;
    let localImage = this.state.images;
    if (localSet.length < 2) return;
    let img1 = localSet[0];
    let img2 = localSet[1];
    if (img1.name === img2.name) {
      // make the state of these images as done -> (1)
      localImage = localImage.map(function (p) {
        if (p.name == img1.name) {
          p.state = 1;
          p.isOpen = 0;
        }
        if (p.name == img2.name) {
          p.state = 1;
          p.isOpen = 0;
        }
        return p;
      });
    } else {
      localImage = localImage.map(function (p) {
        if (p.name == img1.name) {
          p.isOpen = 0;
        }
        if (p.name == img2.name) {
          p.isOpen = 0;
        }
        return p;
      });
    }

    if (this.allCellsBlack()) {
      this.setState({ btnState: "NEW GAME" });
      this.setState({ gameState: "GAME OVER" });
      this.setState({ clicks: 0 });
    } else this.setState({ clicks: this.state.clicks + 1 });
    this.setState({ images: localImage });
    this.setState({ chhosenSet: [] });

    return;
  }
  handleOnCLick = (img) => {
    if (img.state === 1) return;
    let localSet = this.state.chhosenSet;
    let localImage = this.state.images;
    localSet.push(img);
    if (localSet.length == 1) {
      let img1 = localSet[0];

      localImage = localImage.map(function (p) {
        if (p.cellNo == img1.cellNo && p.name === img1.name) {
          p.isOpen = 1;
        }
        return p;
      });
    } else {
      let img1 = localSet[0];
      let img2 = localSet[1];
      localImage = localImage.map(function (p) {
        if (p.cellNo == img1.cellNo && p.name === img1.name) p.isOpen = 1;
        if (p.cellNo == img2.cellNo && p.name === img2.name) p.isOpen = 1;
        return p;
      });
    }

    this.setState({ image: localImage });
  };

  shuffleArray(flag) {
    if (flag === 1) {
      let array = this.state.images;

      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      for (let i = 0; i < array.length; i++) {
        array[i].state = 0;
        array[i].isOpen = 0;
      }
      this.setState({ images: array, start: 1 });

      return;
    } else {
      let array = this.state.images;
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      this.setState({ images: array });
      return;
    }
  }

  handleReset = () => {
    let localImage = this.state.images.map(function (p) {
      p.isOpen = 0;
      p.state = 0;
      return p;
    });
    console.log(localImage);
    if (this.state.btnState == "NEW GAME") {
      this.setState({ btnState: "RESET GAME" });
      this.setState({ gameState: "" });
    }

    this.setState({ images: localImage, start: 2 });
    this.setState({ chhosenSet: [] });
    //shuffle the mainImages Array
    this.shuffleArray(0);
  };
  handleGoToMain = () => {
    this.props.changeState();
  };
  render() {
    // console.log(this.state.images.length);
    if (this.state.start === 0) {
      this.shuffleArray(1);
    }

    let localSet = this.state.chhosenSet;
    if (localSet.length >= 2) {
      // set a timeOut for 1 sec to wait before the images are erased
      setTimeout(
        function () {
          this.check();
        }.bind(this),
        1000
      );
    }
    let name = this.state.images[0].name.split("/")[1];
    return (
      <div className="container">
        <NavBar name={name} clicks={this.state.clicks} />
        <h2
          style={{
            position: "absolute",
            top: "1%",
            left: "42%",
            color: "white",
          }}
        >
          {this.state.gameState}
        </h2>
        <br></br>
        <div
          className="container col-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 7%)",
            gridRowGap: "7px",
            position: "absolute",
            top: "10%",
            left: "30%",
          }}
        >
          {this.state.images.map((img) => (
            <ImageCell
              image={img}
              onClick={() => this.handleOnCLick(img)}
            ></ImageCell>
          ))}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => this.handleReset()}
          style={{ position: "absolute", top: "85%", left: "32%" }}
        >
          {this.state.btnState}
        </button>
        <button
          className="btn btn-warning"
          onClick={this.props.changeState}
          style={{ position: "absolute", top: "85%", left: "45%" }}
        >
          MAIN SCREEN
        </button>
      </div>
    );
  }
}

export default MainComp;
