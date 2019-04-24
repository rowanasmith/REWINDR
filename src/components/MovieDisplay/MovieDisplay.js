// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
// import Axios from 'axios';



// class MovieDisplay extends Component {


//   render() {
//       if (this.props.movieSearchResults.Search){
//     return (
//       <div className="App">
//         <header>
//         <h1>Search Results</h1>
//         <h3>Total Results: {this.props.movieSearchResults.totalResults}</h3>
//         </header>
//         <table className="table">
//           <thead>
//             <tr><th>Poster</th><th>Title</th><th>Year</th></tr>
//           </thead>
//           <tbody>

//             {this.props.movieSearchResults.Search.map(item => 
//               <tr key={item.imdbID}>
//               <td><img className="poster" src={`${item.Poster}`} alt='Poster'></img></td>
//               <td><Link to={`/movie/${item.imdbID}`}>
//               {item.Title}
//               </Link></td>
//               <td>{item.Year}</td>
//             </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
//   else if (this.props.movieSearchResults.Response === "False"){
//       return (<h1>Movie Not Found!</h1>)
//   }
//   else return [];
// }

// }
// const mapStateToProps = state => ({
//     movieSearchResults: state.movieSearchResults,
//   });
// export default connect(mapStateToProps)(MovieDisplay);
