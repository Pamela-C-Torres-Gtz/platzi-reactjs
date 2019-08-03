import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/BadgeList.css";
const URL_API = "https://randomuser.me/api/";

async function getData(url) {
  let { results } = await fetch(url).then(response => response.json());
  return {
    id: results[0].login.uuid,
    firstName: results[0].name.first,
    lastName: results[0].name.last,
    age: results[0].dob.age,
    email: results[0].email,
    twitter: results[0].login.username,
    avatarUrl: results[0].picture.medium
  };
}

async function createUsers() {
  let people = new Array(5).fill(0).map(user => getData(URL_API));

  let users = await Promise.all(people);

  return users;
}

/*
  Instalación de Font Awesome React: 
  https://www.npmjs.com/package/@fortawesome/react-fontawesome

  (1) --> npm i --save @fortawesome/fontawesome-svg-core
  (1) --> npm i --save @fortawesome/free-solid-svg-icons
  (3) --> npm i --save @fortawesome/react-fontawesome
  (2) Iconos --> npm i --save @fortawesome/free-brands-svg-icons
*/
class BadgesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // createUsers()
        //   .then(response => this.setState({ data: response }))
        //   .catch()
      ]
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        createUsers()
          .then(response => this.setState({ data: response }))
          .catch()
      ]
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <ul className="list-unstyled">
        {this.state.data.map(card => {
          return (
            <li key={card.id} className="itemsCards">
              <div className="imgCard">
                <img className="cardPicture" src={card.avatarUrl} alt="" />
              </div>
              <div>
                <p className="font-weight-bold mb-0 mt-2">
                  {card.firstName} {card.lastName}
                </p>
                <span style={{ color: "#00acee" }}>
                  <FontAwesomeIcon icon={faTwitter} /> @{card.twitter}
                </span>
                <p className="mb-2">Age: {card.age}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
