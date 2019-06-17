import React from "react";

class lowaer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Lower: [
        {
     
        }
      ]
    };
  }
  componentWillMount() {
    this.getInfo();
  }
  getInfo() {
    // event.preventDefault();

    fetch("http://localhost:5000/raggad", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        this.setState({ Lower: newData });
      });
  }
  render() {
    return (   
      <div>
        {this.state.Lower.map(shop => (
          <div>
            {shop.name}
            <br />
            {shop.phoneNumber}
            <br />
            {shop.location}
            <b />
            {shop.graduateYear}
            <br />
            {shop.graduatUN}
          </div>
        ))}
      </div>
    );
  }
}
// const list = [
//   {
//     id: 'a',
//     firstname: 'Robin',
//     lastname: 'Wieruch',
//     year: 1988,
//   },
//   {
//     id: 'b',
//     firstname: 'Dave',
//     lastname: 'Davidds',
//     year: 1990,
//   },
// ];

// const lowaer = () => (
//   <ul>
//     {list.map(item => (
//       <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
// );
// class lowaer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           name: "",
//           phoneNumber: "",
//           location: "",
//           graduateYear: "",
//           graduatUN: ""
//         }
//       ]
//     };
//   }
//   componentWillMount() {
//     this.getInfo();
//   }
//   getInfo() {
//     // event.preventDefault();
// // console.log(this.state.data)
//     fetch("http://localhost:5000/raggad", {
//       method: "get",
//       headers: { "Content-Type": "application/json" }
//     })
//       .then(response => response.json())

//       .then(newdata => {
//         console.log(newdata)
//         this.setState({ data: newdata });
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.data.map(low => (
//           <div>
//             {low.name}
//             <br />
//             {low.phoneNumber}
//             <br />
//             {low.location}
//             <b />
//             {low.graduateYear}
//             <br />
//             {low.graduatUN}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default lowaer;
