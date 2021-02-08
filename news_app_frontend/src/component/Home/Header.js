import React from "react";
import "../Home/Header.css";
import SearchIcon from "../../assests/Background_image/search_icon.svg";
import ProfileImage from "../../assests/Background_image/profile_logo.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      selectedTab: props.selectedTab,
      tabList: [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ],
      countrycode:props.countryCode?props.countryCode:"ca",
      countryChanged:props.countryChanged?props.countryChanged:null

    };
  }

  handleClick = (itm)=>{
    this.setState({
      countrycode:itm
    })
    if(this.state.countryChanged){
      this.state.countryChanged(itm)
  }}
  
  render() {
    return (
      <div className="Main-Header">
        <div className="Title">The World News</div>
        <div className="header-content">
          <div className="header">
            {this.state.tabList.map((item) => {
              return (
                <NavLink to={{
                  pathname:"/"+item,
                  search:'?countryCode='+this.state.countrycode
                  }} key={item} query={{countryCode: this.state.countrycode}}>
                  <div className="NavItem">
                    {item}
                    {this.state.selectedTab === item ? (
                      <div
                        style={{
                          height: "2px",
                          width: this.props.width,
                          backgroundColor: "red",
                        }}
                      ></div>
                    ) : null}
                  </div>
                </NavLink>
              );
            })}
          </div>
          <div className="Searchhead">
            <div className="Searchbar">
              <img src={SearchIcon} alt="img1"></img>
            </div>
            <div className="Search_Values">
                <div className="Country_Name" onClick={()=>this.handleClick("ca")}>Canada</div>
                <div className="Country_Name" onClick={()=>this.handleClick("cn")}>China</div>
                <div className="Country_Name" onClick={()=>this.handleClick("in")}>India</div>
                <div className="Country_Name" onClick={()=>this.handleClick("us")}>US</div>
            </div>
          </div>
          
          <div className="Hamburger">
            <div className="Profile">
              <img src={ProfileImage} alt="img2"></img>
            </div>
            <div className="Profile_dropdown">
              <div className="f">Profile</div>
              <div className="f">About us</div>
              <div className="f">Logout</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
