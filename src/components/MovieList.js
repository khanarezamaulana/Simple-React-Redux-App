import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions'; // memakai kurung kerawal karna function di component tersebut tidak menggunakan export default.

class MovieList extends React.Component {
    
    // fungsi ini untuk mengambil list dari function mapStateToProps.
    renderList() { 
        return this.props.movie.map((movie) => {
            return (
                <div className="item" key={movie.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            // jadi saat diklik tombolnya, maka akan menjalankan fungsi yang akan memanggil selectMovie sebagai props. dan akan mengirim (movie) yang sudah di klik. 
                            // dan setiap button di klik maka akan memperbarui state/ memperbarui reducers dan juga memperbarui kondisi didalam redux-store.\
                            // dan setiap kali data diperbarui didalam redux-store dengan dispatch and action atau pada dasarnya memanggil ActionCreator, itu menyebabkan semua komponen yang terhubung ke function connect untuk secara otomatis dirender.
                            onClick={() => this.props.selectMovie(movie)} 
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{movie.title}</div>
                </div>
            );
        });
    };
    
    render() {
        // console.log(this.props)
        return (
            // console.log(this.props),
            <div className="ui divided list">{this.renderList()}</div>
        );
    };
};

// function ini untuk mendapatkan semua state yang ada di redux store. sehingga bisa muncul sebagai props di komponen.
// (state) ini untuk fungsi props yang akan di panggil semua state di dalam redux store.
// nama functionnya bisa apa saja, tidak harus mapStateToProps.
const mapStateToProps = (state) => {
    // console.log(state)
    return { movie: state.movie };
}

// connect()() maksudnya adalah untuk mengembalikan function.
// dan memanggil function yang ingin direturn memakai kurung buka tutup () setelahnya.
// jadi () pertama mereturn function, dan () kedua memanggil function yang dikembalikan.

// connect akan mengambil action creator { selectMovie } dan meneruskannya ke komponen sebagai props.
export default connect(mapStateToProps, { selectMovie })(MovieList);  

// juga kita perlu mengkonfigurasi connect(koneksi) untuk menghubungkan state. 
// dengan melemparkan function tersebut sebagai function pertama untuk menghubungkan state tersebut.
// inilah cara memfaatkan react-redux library untuk mendapatkan data dari redux-store. 
// kita akan selalu import connect dan kemudian mengirimkan komponen nya sebagai fungsi kedua connect() >>().
// dan mendefinisikan/dekralasikan function state nya yang dikirim sebagai props, like: function mapStateToProps diatas.
// dan mengembalikan objek yang akan ditampilkan sebagai properti didalam komponen.