import React from "react";

class user extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Low: [{}]
    };
  }
  componentWillMount() {
    this.getInfo();
  }
  getInfo() {
    // event.preventDefault();

    fetch("http://localhost:5000/cli-name", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        this.setState({ Low: newData });
      });
  }

  render() {
    return (
      <div>
          <center>
        <div class="grid-container">
          <div id="item1">
            {this.state.Low.map(low => (
              <div>
                {/* <NavLink> */}
                <button>
                  {low.username}

                  <img
                src={low.url || "https://via.placeholder.com/200"}
                alt="uploaded image"
                id="size"
              />
                </button>
                {/* </NavLink> */}
                <br />
                {low.id}
                <br />
                {low.phoneNumber}
                <br />
              </div>
            ))}
          </div>
        </div>
        </center>
      </div>
    );
  }
}
export default user;
