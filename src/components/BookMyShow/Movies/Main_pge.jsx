import React, { Component } from "react";
import Carousel from "./Carsoul";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Left from "./LeftPanel";
import axios from "axios";
import Config from "./Config.json";
import Navbar from "./Navbar";

class Main_page extends Component {
  _isMounted = false;
  state = {
    MainData: [],
    language: ["Hindi", "English", "Punjabi", "Tamil"],
    Formet: ["2D", "3D", "4DX"],
    Genre: ["Action", "Adventure", "Biography", "Comedy"],
  };

  async componentDidMount() {
    this._isMounted = true;
    let { lang, format, genre } = queryString.parse(this.props.location.search);
    lang = lang === undefined ? "" : lang;
    format = format !== undefined ? format : "";
    genre = genre !== undefined ? genre : "";
    let path = this.props.location.pathname;
    let url1 = Config.base+"/"+"movies"
    console.log(url1)
    // console.log(path)
    // console.log(Config.base)
    // console.log(lang)
    // console.log(format)
    let params = "";
    params = this.addToParams(params, "lang", lang);
    params = this.addToParams(params, "format", format);
    params = this.addToParams(params, "genre", genre);
    const url = await axios.get(url1 + path + params);
    // console.log(params)
    // console.log(url);
    //  console.log(Config.base +path+params)
    if (url != null) {
      this.setState({
        MainData: url.data,
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  addToParams(params, name, value) {
    if (value !== undefined && value.length > 0) {
      params = params ? params + "&" : "?";
      params = params + name + "=" + value;
    }
    return params;
  }
  makecbStructure1 = (language, langSelect) => {
    let temp = language.map((p) => ({
      language: p,
      selected: false,
    }));
    // console.log(temp)
    if (langSelect !== undefined) {
      let lang = langSelect.split(",");
      for (let i = 0; i < lang.length; i++) {
        let obj = temp.find((p) => p.language === lang[i]);
        if (obj) obj.selected = true;
      }
    }
    return temp;
  };
  makecbStructure2 = (Formet, formetSelect) => {
    let temp = Formet.map((p) => ({
      Formet: p,
      selected: false,
    }));
    if (formetSelect !== undefined) {
      let lang = formetSelect.split(",");
      for (let i = 0; i < lang.length; i++) {
        let obj = temp.find((p) => p.Formet === lang[i]);
        if (obj) obj.selected = true;
      }
    }
    return temp;
  };
  makecbStructure3 = (Genre, GenreSelect) => {
    let temp = Genre.map((p) => ({
      Genre: p,
      selected: false,
    }));
    if (GenreSelect !== undefined) {
      let lang = GenreSelect.split(",");
      for (let i = 0; i < lang.length; i++) {
        let obj = temp.find((p) => p.Genre === lang[i]);
        if (obj) obj.selected = true;
      }
    }
    return temp;
  };
  handleSubmitcb = (language, Formet, Genre) => {
    let filterLang = language.filter((p) => p.selected);
    let filterFormet = Formet.filter((p) => p.selected);
    let filterGenre = Genre.filter((p) => p.selected);
    // console.log(filterLang)
    let arrayNames = filterLang.map((p) => p.language).join(",");
    let arrayFormet = filterFormet.map((p) => p.Formet).join(",");
    let arrayGenre = filterGenre.map((p) => p.Genre).join(",");
    // let array1=arrayNames.join(",")
    // console.log(array1)
    // console.log(arrayNames);
    // console.log(arrayFormet);
    // console.log(arrayGenre);

    let params = "";
    params = this.addToParams(params, "lang", arrayNames);
    params = this.addToParams(params, "format", arrayFormet);
    params = this.addToParams(params, "genre", arrayGenre);
    // console.log(params)
    this.props.history.push({
      pathname: this.props.location.pathname,
      // pathname:"/NCR",
      search: params,
    });
  };
  render() {
    const { MainData, language, Formet, Genre } = this.state;
    // console.log(language.name);
    let { lang, format, genre } = queryString.parse(this.props.location.search);
    // console.log(langSelect)
    let languageCheckBox = this.makecbStructure1(language, lang);
    let formetCheckBox = this.makecbStructure2(Formet, format);
    let GenreCheckBox = this.makecbStructure3(Genre, genre);
    lang = lang ? lang : "";
    format = format ? format : "";
    genre = genre ? genre : "";
    // console.log(languageCheckBox)
    return (
      <div>
        <Navbar />
        <Carousel />
        <div className="container-fluid bg-light">
          <div className="row p-3">
            <h2 style={{ fontFamily: "sans-serif", cursor: "pointer" }}>
              Movies
            </h2>
            <h5
              className="ml-4 mt-2 text-secondary"
              style={{ cursor: "pointer" }}
            >
              Now Showing
            </h5>
            <h5
              className="ml-4 mt-2 text-secondary"
              style={{ cursor: "pointer" }}
            >
              Coming Soon
            </h5>
            <h5
              className="ml-4 mt-2 text-secondary"
              style={{ cursor: "pointer" }}
            >
              Exclusive
            </h5>
          </div>
          <div className="row col-12">
            <div className="col-3">
              <Left
                language={languageCheckBox}
                Formet={formetCheckBox}
                Genre={GenreCheckBox}
                onSubmit={this.handleSubmitcb}
                // langSelect={langSelect}
              />
            </div>
            <div className="col-9">
              <div className="row">
                {MainData.map((p, ind) => (
                  <Link
                    className="card"
                    style={{ width: "18rem" }}
                    key={ind}
                    to={"/NCR/" + ind}
                    onClick={() => this.props.onCardClick(ind, p.title)}
                  >
                    <img className="card-img-top" src={p.img} alt="" />
                    <div className="card-body">
                      <div>
                        <i
                          className="fa fa-heart "
                          style={{ color: "red" }}
                        ></i>
                        {p.rating}
                        <span className="" style={{ marginLeft: "80px" }}>
                          {p.title}
                        </span>
                      </div>
                      <div className="">
                        {p.votes} votes{" "}
                        <span className="" style={{ marginLeft: "60px" }}>
                          {p.desc}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main_page;
