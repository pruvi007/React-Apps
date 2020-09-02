import React, { Component } from "react";
class Left extends Component {
  state = {};

  handleChange=e=>{
    const { language,Formet,Genre } = this.props;
    const {currentTarget : inp } = e
    let cb =language.find((p)=>p.language === inp.name )
    let cb1 =Formet.find((p)=>p.Formet === inp.name )
    let cb2 =Genre.find((p)=>p.Genre === inp.name )
    // console.log(cb)
    if(cb){ cb.selected = inp.checked;}
    if(cb1){ cb1.selected = inp.checked;}
  if(cb2){ cb2.selected = inp.checked;}
    console.log(cb)
    // console.log(language)
    // console.log(Formet)
    console.log(language)
    this.props.onSubmit( language,Formet,Genre)
  }
  render() {
    const { language,Formet,Genre, } = this.props;
    // console.log(language)
    return (
      <div>
        <img src="https://i.ibb.co/Hry1kDH/17443322900502723126.jpg" alt="" />
        <form >
        <div className="dropdown">
        <div  
          className="row ml-3 mr-2 pt-2 pb-2 d-none d-lg-block"
         style={{backgroundColor:"white",borderRadius:"3px"}}
        >
          <div  className="col text-primary">
            <i className="fa fa-chevron-up"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Language{" "}
          </div>
        {language.map((p, ind) => (
            <div className="form-check" key={ind} >
              <input
                value={p.selected}
                onChange={this.handleChange}
                id={p.language}
                type="checkbox"
                name={p.language}
                checked={p.selected}
                className="form-check-input"    
              />
              <label className="form-check-label" htmlFor={p.language}>{p.language}</label>
            </div>
          ))}
        </div>
        </div>
        <div  
          className="row ml-3 mr-2 pt-2 pb-2 d-none d-lg-block"
         style={{backgroundColor:"white",borderRadius:"3px"}}
        >
          <div  className="col text-primary">
            <i className="fa fa-chevron-up"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Format{" "}
          </div>
       {Formet.map((p,ind)=>(
        <div className="form-check" key ={ind}>
            <input className="form-check-input" type="checkbox" 
             name={p.Formet}
             id={p.Formet}
             checked={p.selected}
             value={p.selected}
             onChange={this.handleChange}

            />
  <label className="form-check-label"htmlFor={p.Formet}>
{p.Formet}
  </label>
        </div>
       ))}  
        </div>
        <div  
          className="row ml-3 mr-2 pt-2 pb-2 d-none d-lg-block"
         style={{backgroundColor:"white",borderRadius:"3px"}}
        >
          <div  className="col text-primary">
            <i className="fa fa-chevron-up"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genre{" "}
          </div>
       {Genre.map((p,ind)=>(
        <div className="form-check" key={ind}>
            <input className="form-check-input" type="checkbox"
             name={p.Genre}
             id={p.Genre}
             checked={p.selected}
             value={p.selected}
             onChange={this.handleChange}
            
            />
  <label className="form-check-label" htmlFor={p.Genre}>
{p.Genre}
  </label>
        </div>
       ))}  
       </div>
       </form>

      </div>
    );
  }
}

export default Left;
