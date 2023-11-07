import { Fragment} from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";
import { useNavigate } from "react-router-dom";

export default function Movie() {
    const navigate = useNavigate();

    const poster = [
        {
            title: "Avatar",
            id: 1,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://play-lh.googleusercontent.com/-Pa0p7DH28XESDIwb7xrh5hVPQcsqt6mtvc2wgTca8SQEeU9RYT8jdhjyB8o7xaUSsA1=w240-h480-rw",
            description: "Avatar adalah film epik fiksi ilmiah yang disutradarai oleh James Cameron. Film ini mengisahkan tentang petualangan Jake Sully, seorang mantan tentara marinir yang berpartisipasi dalam program Avatar di planet Pandora untuk menjelajahi dan berinteraksi dengan penduduk asli bernama Na'vi.",
          },
          {
            title: "Avengers: Endgame",
            id: 2,
            rate: 4,
            genre: "Action, Adventure, Drama",
            img: "https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg",
            description: "Avengers: Endgame adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Ini adalah bagian dari Marvel Cinematic Universe dan merupakan kelanjutan dari Avengers: Infinity War. Film ini mengikuti upaya Avengers untuk mengalahkan Thanos setelah ia menghapus setengah populasi alam semesta dengan Infinity Stones.",
          },
          {
            title: "Titanic",
            id: 3,
            rate: 3,
            genre: "Drama, Romance",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL58Q1/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Titanic adalah film romantis epik yang disutradarai oleh James Cameron. Film ini mengisahkan kisah cinta antara Jack Dawson, seorang penumpang miskin, dan Rose DeWitt Bukater, seorang wanita kaya, di atas kapal pesiar Titanic yang ikonik. Kisah mereka terjalin saat kapal tersebut menuju nasib tragisnya.",
          },
          {
            title: "Star Wars: Episode VII - The Force Awakens",
            id: 4,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://m.media-amazon.com/images/I/51tie-dGPmL._SX300_SY300_QL70_FMwebp_.jpg",
            description: "Star Wars: Episode VII - The Force Awakens adalah film space opera yang disutradarai oleh J.J. Abrams. Film ini adalah bagian dari franchise Star Wars dan mengambil setting beberapa tahun setelah kejadian dalam Return of the Jedi. Film ini mengikuti petualangan Rey, Finn, dan Kylo Ren dalam konflik antara Resistance dan First Order.",
          },
          {
            title: "Avengers: Infinity War",
            id: 5,
            rate: 4,
            genre: "Action, Adventure, Fantasy",
            img: "https://akcdn.detik.net.id/community/media/visual/2018/03/19/1af717fe-3c85-4836-8a4b-e48f2fa00a50.png?w=700&q=90",
            description: "Avengers: Infinity War adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Dalam film ini, Avengers berusaha menghentikan Thanos, seorang penjahat super yang berambisi mengumpulkan semua Infinity Stones untuk mendapatkan kekuasaan mutlak. Para pahlawan Marvel bersatu untuk melawan ancaman yang belum pernah terjadi sebelumnya.",
          },

    ];
    const data = [
        {
            title: "Avatar",
            id: 1,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://play-lh.googleusercontent.com/-Pa0p7DH28XESDIwb7xrh5hVPQcsqt6mtvc2wgTca8SQEeU9RYT8jdhjyB8o7xaUSsA1=w240-h480-rw",
            description: "Avatar adalah film epik fiksi ilmiah yang disutradarai oleh James Cameron. Film ini mengisahkan tentang petualangan Jake Sully, seorang mantan tentara marinir yang berpartisipasi dalam program Avatar di planet Pandora untuk menjelajahi dan berinteraksi dengan penduduk asli bernama Na'vi.",
          },
          {
            title: "Avengers: Endgame",
            id: 2,
            rate: 4,
            genre: "Action, Adventure, Drama",
            img: "https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg",
            description: "Avengers: Endgame adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Ini adalah bagian dari Marvel Cinematic Universe dan merupakan kelanjutan dari Avengers: Infinity War. Film ini mengikuti upaya Avengers untuk mengalahkan Thanos setelah ia menghapus setengah populasi alam semesta dengan Infinity Stones.",
          },
          {
            title: "Titanic",
            id: 3,
            rate: 3,
            genre: "Drama, Romance",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL58Q1/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Titanic adalah film romantis epik yang disutradarai oleh James Cameron. Film ini mengisahkan kisah cinta antara Jack Dawson, seorang penumpang miskin, dan Rose DeWitt Bukater, seorang wanita kaya, di atas kapal pesiar Titanic yang ikonik. Kisah mereka terjalin saat kapal tersebut menuju nasib tragisnya.",
          },
          {
            title: "Star Wars: Episode VII - The Force Awakens",
            id: 4,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://m.media-amazon.com/images/I/51tie-dGPmL._SX300_SY300_QL70_FMwebp_.jpg",
            description: "Star Wars: Episode VII - The Force Awakens adalah film space opera yang disutradarai oleh J.J. Abrams. Film ini adalah bagian dari franchise Star Wars dan mengambil setting beberapa tahun setelah kejadian dalam Return of the Jedi. Film ini mengikuti petualangan Rey, Finn, dan Kylo Ren dalam konflik antara Resistance dan First Order.",
          },
          {
            title: "Avengers: Infinity War",
            id: 5,
            rate: 4,
            genre: "Action, Adventure, Fantasy",
            img: "https://akcdn.detik.net.id/community/media/visual/2018/03/19/1af717fe-3c85-4836-8a4b-e48f2fa00a50.png?w=700&q=90",
            description: "Avengers: Infinity War adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Dalam film ini, Avengers berusaha menghentikan Thanos, seorang penjahat super yang berambisi mengumpulkan semua Infinity Stones untuk mendapatkan kekuasaan mutlak. Para pahlawan Marvel bersatu untuk melawan ancaman yang belum pernah terjadi sebelumnya.",
          },
          {
            title: "Avatar",
            id: 6,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://play-lh.googleusercontent.com/-Pa0p7DH28XESDIwb7xrh5hVPQcsqt6mtvc2wgTca8SQEeU9RYT8jdhjyB8o7xaUSsA1=w240-h480-rw",
            description: "Avatar adalah film epik fiksi ilmiah yang disutradarai oleh James Cameron. Film ini mengisahkan tentang petualangan Jake Sully, seorang mantan tentara marinir yang berpartisipasi dalam program Avatar di planet Pandora untuk menjelajahi dan berinteraksi dengan penduduk asli bernama Na'vi.",
          },
          {
            title: "Avengers: Endgame",
            id: 7,
            rate: 4,
            genre: "Action, Adventure, Drama",
            img: "https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg",
            description: "Avengers: Endgame adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Ini adalah bagian dari Marvel Cinematic Universe dan merupakan kelanjutan dari Avengers: Infinity War. Film ini mengikuti upaya Avengers untuk mengalahkan Thanos setelah ia menghapus setengah populasi alam semesta dengan Infinity Stones.",
          },
          {
            title: "Titanic",
            id: 8,
            rate: 3,
            genre: "Drama, Romance",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL58Q1/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Titanic adalah film romantis epik yang disutradarai oleh James Cameron. Film ini mengisahkan kisah cinta antara Jack Dawson, seorang penumpang miskin, dan Rose DeWitt Bukater, seorang wanita kaya, di atas kapal pesiar Titanic yang ikonik. Kisah mereka terjalin saat kapal tersebut menuju nasib tragisnya.",
          },
          {
            title: "Star Wars: Episode VII - The Force Awakens",
            id: 9,
            rate: 3,
            genre: "Action, Adventure, Fantasy",
            img: "https://m.media-amazon.com/images/I/51tie-dGPmL._SX300_SY300_QL70_FMwebp_.jpg",
            description: "Star Wars: Episode VII - The Force Awakens adalah film space opera yang disutradarai oleh J.J. Abrams. Film ini adalah bagian dari franchise Star Wars dan mengambil setting beberapa tahun setelah kejadian dalam Return of the Jedi. Film ini mengikuti petualangan Rey, Finn, dan Kylo Ren dalam konflik antara Resistance dan First Order.",
          },
          {
            title: "Avengers: Infinity War",
            id: 10,
            rate: 4,
            genre: "Action, Adventure, Fantasy",
            img: "https://akcdn.detik.net.id/community/media/visual/2018/03/19/1af717fe-3c85-4836-8a4b-e48f2fa00a50.png?w=700&q=90",
            description: "Avengers: Infinity War adalah film superhero yang disutradarai oleh Anthony dan Joe Russo. Dalam film ini, Avengers berusaha menghentikan Thanos, seorang penjahat super yang berambisi mengumpulkan semua Infinity Stones untuk mendapatkan kekuasaan mutlak. Para pahlawan Marvel bersatu untuk melawan ancaman yang belum pernah terjadi sebelumnya.",
          },
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { Data: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={item.size} color={item.color} onClick={() => navigateToDetailPage(item)}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    <div className="list">
                        {data.map((item, index) => (
                            <Fragment key={item.id}>
                                <CardSmall
                                    title={item.title}
                                    img={item.img}
                                    genre={item.genre}
                                    size={item.size}
                                    color={item.color}
                                    onClick={() => navigateToDetailPage(item)}
                                />
                                {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
