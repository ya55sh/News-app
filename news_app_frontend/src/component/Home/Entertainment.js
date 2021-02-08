import React from "react";
import Header from "../Home/Header";
import "./Entertainment.css";
import GENERAL_NEWS_CARD from "./GENERAL_NEWS_CARD";

class Entertainment extends React.Component {
  constructor(props) {
    super(props);
    var url = new URL(window.location.href);
    var paramValue = url.searchParams.get("countryCode");
    this.state = {
      loading: true,
      content: null,
      countryCode: paramValue,
    };

    console.log("general pop " + window.location.href + " " + paramValue);
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?category=entertainment&country=${this.state.countryCode}&apiKey=675ad4a2820d4c4b9e8a95547e84a0b2&pageSize=100`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      content: data.articles,
      showGNC: false,
      item: null,
    });
    this.handleClick = this.handleClick.bind(this);
    this.countryChangedListener = this.countryChangedListener.bind(this);
  }

  handleClick(item) {
    this.setState({ item: item, showGNC: true });
  }

  countryChangedListener = async (countryCode) => {
    this.setState({
      countryCode: countryCode,
    });
    const url = `https://newsapi.org/v2/top-headlines?category=general&country=${countryCode}&apiKey=675ad4a2820d4c4b9e8a95547e84a0b2&pageSize=100`;
    const response = await fetch(url);
    console.log("called url from general ", url);
    const data = await response.json();
    this.setState({
      loading: false,
      content: data.articles,
      showGNC: false,
      item: null,
    });
  };

  clickListener = () => {
    this.setState({
      showGNC: false,
    });
  };
  

  render() {
    return (
      <div>
        <Header
          countryChanged={this.countryChangedListener}
          countryCode={this.state.countryCode}
          selectedTab={"entertainment"}
          width={"fitContent"}
        />
        {this.state.loading || !this.state.content ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.showGNC ? (
              <GENERAL_NEWS_CARD
              closeEventListener={this.clickListener}
                className="gnc"
                info={[
                  // this.state.item.author,
                  // this.state.item.title,
                  // this.state.item.description,
                  this.state.item.url,
                  // this.state.item.publishedAt,
                  // this.state.item.content,
                ]}
              />
            ) : null}
            <div className="all_boxes">
              {this.state.content.map((person, idx) => {
                return (
                  <div
                    className="general_news_single"
                    onClick={() => this.handleClick(person)}
                    key={idx}
                  >
                    <div className="filter"></div>
                    <p>{person.title}</p>
                    <div className="general_news_desc_box">
                      <div
                        className="general_news_desc"
                        style={{ color: "white" }}
                      >
                        {person.description}
                      </div>
                    </div>
                    <div className="general_news_img">
                      <img
                        src={person.urlToImage}
                        alt={"image" + person.author}
                      ></img>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Entertainment;
