import React, { Component } from "react";
class TicketDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row bg-dark pt-1 pb-3">
          <div
            className="col-lg-6  col-md-12 col-sm-12  text-left text-white"
            style={{ fontSize: "25px" }}
          >
            <div className="row ">
              <div className="col-lg-1 col-md-1 col-2  pt-2">
                <a>
                  <i className="fas fa-chevron-left"></i>
                </a>
              </div>
              <div className="col-lg-11 col-md-4 col-7">
                <div className="row">
                  <span>War</span>
                </div>
                <div className="row" style={{ fontSize: "15px" }}>
                  {" "}
                  Cinepolis: DLF Place, Saket{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-right text-white d-none d-lg-block">
            <div className="row pt-3 ">
              <div className="col" style={{ fontSize: "15px" }}>
                {" "}
                0 Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a>
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row  pt-3 pb-3"
          style={{ backgroundColor: "#f5f5fa", fontSize: "12px" }}
        >
          <div className="col">
            <div className="row">
              <div className="col-lg-6 col-12 ml-1 text-center text-lg-left text-md-left">
                22 TODAY, 3:45 PM
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <button
                  className="btn btn-md btn btn-outline-success m-1"
                  style={{ fontSize: "12px" }}
                  id="timingcss-true"
                >
                  {" "}
                  3:45 PM{" "}
                </button>
                <button
                  className="btn btn-md btn btn-outline-success m-1"
                  style={{ fontSize: "12px" }}
                  id="timingcss-false"
                >
                  {" "}
                  10:20 PM{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-secondary text-left border-bottom ml-5">
          {" "}
          RECLINER - Rs 420.00{" "}
        </div>
        <div>
          <div>
            <div className="row ml-4 mr-4 no-gutters">
              <div className="col-1 text-right mr-1">A</div>
              <div className="col-10 text-left">
                <div style={{marginLeft: "1",marginRight:"1",marginTop:"1",marginBottom:"1",float:"left",width:"19",height:"19"}}>
                  <button
                     style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1 text-center"
                    id="available-true"
                  >
                    <span className="text-center">1</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>2</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>3</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>4</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>5</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>6</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>7</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-false"
                  >
                    <span>8</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>9</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>10</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>11</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>12</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-false"
                  >
                    <span>13</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>14</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>15</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>16</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-false"
                  >
                    <span>17</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span>18</span>
                  </button>
                  <button
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-false"
                  >
                    <span>19</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row ml-4 mr-4 no-gutters">
              <div className="col-1 text-right mr-1">B</div>
              <div className="col-10 text-left">
                <div style={{marginLeft: "1",marginRight:"1",marginTop:"1",marginBottom:"1",float:"left",width:"19",height:"19"}}>
                  <button
                     style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-false"
                  >
                    <div >1</div>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >2</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >3</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >4</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >5</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >6</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >7</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >8</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >9</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >10</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >11</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >12</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >13</span>
                  </button>
                  <button
                    
                      style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
   
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >14</span>
                  </button>
                  <button
                    
                    style={{display: "inline-block",fontSize:"10px", textAlign: "center",width: "21px",height: "21px", borderRadius:"5px",marginTop: "4px",marginRight: "2px", marginBottom: "4px", marginLeft: "2px",border:"solid gray"}}
    
                    className="btn btn-sm  btn-outline-secondary-false mr-1 p-1"
                    id="available-true"
                  >
                    <span >15</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketDetails;
