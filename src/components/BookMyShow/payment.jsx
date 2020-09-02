import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class PaymentSummary extends Component {
  state = {
    mainData: {}
  };
  // async componentDidMount() {
  //   let response = await axios.get(
  //     "https://us-central1-bkyow-22da6.cloudfunctions.net/app/details"
  //   );
  //   console.log(response)
  //   console.log(response.data);
  //   // this.setState({mainData:response.data})
  // }
  render() {
    let mainData = this.props.movieDetails
    console.log(mainData)
    let movieTitle = this.props.movieTitle;
    let movieInd = this.props.movieInd;
    let movieName = this.props.movieName;
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
                  <Link to={"/NCR/" + movieInd}>
                    <i
                      className="fa fa-chevron-left"
                      style={{ color: "white" }}
                    ></i>
                  </Link>
                </a>
              </div>
              <div className="col-lg-11 col-md-4 col-7">
                <div className="row">
                  <span>{movieName}</span>
                </div>
                <div className="row" style={{ fontSize: "15px" }}>
                  {" "}
                  {movieTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-right text-white d-none d-lg-block">
            <div className="row pt-3 "></div>
          </div>
        </div>
        <div className="row col-lg-12">
          <div className="col-lg-9">
            <img src="https://i.ibb.co/SK0HfNT/bookasmile-03.png" alt="" />
          </div>
         <div  class="col-lg-3 col-md-6" style={{backgroundColor: "white"}}>
           <div  class="row"><div  class="col">
             <div  class="row text-danger mt-1 ml-1"> BOOKING SUMMARY </div>
             <br /><div  class="row ml-2">
               <div  class="col-6 text-left">Movie Name</div>
    <div  class="col-6 text-right">{mainData.title}</div></div>
               <div  class="row ml-2">
                 <div  class="col-5 text-left">Movie Hall</div>
    <div  class="col-7 text-right">{mainData.movieHall}</div>
                 </div><div  class="row ml-2">
                   <div  class="col-6 text-left">Total Tickets</div>
                   {mainData.tickets!==undefined?
    <div  class="col-6 text-right">{mainData.tickets.length}</div>:""}</div>
                   <div  class="row ml-2"><div  class="col-6 text-left">Tickets</div>
                   {mainData.tickets!==undefined ?
                   mainData.tickets.map((p)=>(
                     <div  class="col-6 text-right">{p}</div>
                     )):""}
                     </div>
                   <div  class="row ml-2">
                     <div  class="col-4 text-left">Date</div>
                   <div  class="col-8 text-right">{mainData.date}</div></div>
                     <div  class="row ml-2">
                       <div  class="col-6 text-left">Time</div>
                   <div  class="col-6 text-right">{mainData.time}</div></div>
                       <div  class="row ml-2 pt-2 pb-2" style={{backgroundColor: "#fffcdc"}}>
                         <div  class="col-6 text-left">Amount Paid</div>
                   <div  class="col-6 text-right">{mainData.amount}</div></div>
                         <div  class="row ml-4 text-center">
                           <img  class="img-fluid" src="https://i.ibb.co/CVHYxVK/images-q-tbn-ANd9-Gc-Qq-PT1-GB7-Cpvo3-WDDCi-Wt-Vto-Q-SLqp-Z9-B1x-D3-D69-WTj-MPyl-Chnd.png" style={{height: "300px" ,width:"300px"}}/></div>
                           <div  class="row ml-2" style={{fontSize: "10px"}}> You can cancel the tickets 4 hour(s) before the show. Refunds will be done according to Cancellation Policy. </div></div>
                           <br /></div></div>
            </div>
      </div>
    );
  }
}

export default PaymentSummary;
