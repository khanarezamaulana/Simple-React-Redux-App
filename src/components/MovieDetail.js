import React from 'react';
import { connect } from 'react-redux';

const MovieDetail = ({ movie }) => { // disini hanya properti movie yang kita mau tampilin dari hasil props.
    if (!movie) {
        return <div><h3>Select a movie !</h3></div>
    }
    else {
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Title : {movie.title}
                    <br />
                    Duration : {movie.duration}
                </p>
            </div>
        );
    };
};

// remember: function ini untuk mendapatkan semua state yang ada di redux store. sehingga bisa muncul sebagai props di komponen.
// (state) ini untuk fungsi props yang akan di panggil semua state di dalam redux store. dan mereturn sebagai objek dari fungsi ini.
// remember: kunci state/props dari objek ini berasal dari properti yang ada di function combineReducers di komponen reducer.
const mapStateToProps = (state) => {
  return { movie: state.selectedMovie }
}

export default connect(mapStateToProps)(MovieDetail);

// membungkus MovieDetail dengan komponen connect sehingga kita bisa mendapatkan informasi dari redux-store.
