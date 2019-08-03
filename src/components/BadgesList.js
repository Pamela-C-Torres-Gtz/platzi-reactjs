import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/BadgeList.css";
import loadingGif from "../images/loading.gif";

class BadgesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async numberPage => {
    this.setState({ loading: true, error: null });

    let buttonCharacters = 1;

    if (numberPage) {
      buttonCharacters += numberPage;
    }

    try {
      let { results } = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      ).then(response => response.json());

      let sizeJson = Object.keys(results).length;

      let i = -1;

      let characters = new Array(sizeJson).fill(0).map(character => {
        i += 1;
        return {
          id: results[i].id,
          name: results[i].name,
          specie: results[i].species,
          avatarUrl: results[i].image,
          origin: results[i].origin.name
        };
      });

      this.setState({
        loading: false,
        data: characters,
        page: this.state.page + buttonCharacters
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  componentWillUnmount() {}

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    if (this.state.loading === true) {
      return (
        <div className="loader">
          <img
            src={loadingGif}
            style={{ width: "200px", height: "200px" }}
            alt="Gif Loading"
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <ul className="cardsList">
          {this.state.data.map(card => {
            return (
              <li key={card.id} className="itemsCards">
                <div className="imgCard">
                  <img className="cardPicture" src={card.avatarUrl} alt="" />
                </div>
                <div clas>
                  <p className="font-weight-bold mb-0 mt-2">{card.name}</p>
                  <span style={{ color: "#00acee" }}>
                    <FontAwesomeIcon icon={faTwitter} /> @{card.origin}
                  </span>
                  <p className="mb-2">{card.specie}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {!this.state.loading && (
          <div className="buttonShow">
            <button
              onClick={() => this.fetchCharacters()}
              className="btn btn-primary mr-2 "
              disabled={this.state.page === 1}
              style={{
                background: "#00acee",
                borderColor: "#00acee",
                width: "150px",
                fontWeight: "bolder"
              }}
            >
              Previous
            </button>
            <button
              onClick={() => this.fetchCharacters()}
              className="reloadCharacters"
              disabled={this.state.page === 25}
              style={{
                background: "#00acee",
                borderColor: "#00acee",
                width: "150px",
                fontWeight: "bolder"
              }}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BadgesList;
