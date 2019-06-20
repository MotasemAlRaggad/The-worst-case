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
        <div>
          <div>
            {this.state.Low.map(low => (
              <div>
                {/* <NavLink> */}
                <button>
                  {low.username}
                  <img
                    src="            https://scontent.famm6-1.fna.fbcdn.net/v/t1.0-9/32594133_789270281241893_4680588052748304384_n.jpg?_nc_cat=106&_nc_ht=scontent.famm6-1.fna&oh=cc29b0a7eca753c0f858f148c6aa20c9&oe=5D7EBF3F
"
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
      </div>
    );
  }
}
export default user;
