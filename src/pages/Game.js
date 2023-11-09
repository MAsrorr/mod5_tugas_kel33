import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { useNavigate } from "react-router-dom";

export default function Game() {
    const navigate = useNavigate();

    const poster = [
        {
            title: "The Legend of Zelda: Breath of the Wild",
            id: 1,
            rate: 4.9,
            genre: "Action-Adventure",
            img: "https://m.media-amazon.com/images/I/91Aa9ZIAaoL.__AC_SX300_SY300_QL70_ML2_.jpg",
            description: "Sebuah game aksi-petualangan epik yang mengikuti perjalanan Link dalam dunia terbuka yang luas, di mana pemain dapat menjelajahi, bertarung, dan memecahkan teka-teki dalam quest-quest menarik.",
          },
          {
            title: "Red Dead Redemption 2",
            id: 2,
            rate: 4.8,
            genre: "Action-Adventure",
            img: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
            description: "Game aksi-petualangan yang mengambil pemain kembali ke era Wild West, mengikuti Arthur Morgan, seorang penjahat yang mencari keadilan di dunia yang keras dan brutal.",
          },
          {
            title: "The Witcher 3: Wild Hunt",
            id: 3,
            rate: 4.7,
            genre: "Action RPG",
            img: "https://www.psegameshop.com/wp-content/uploads/2023/01/PS5-The-Witcher-3-Wild-Hunt-Complete-Edition-R3English-1.jpg",
            description: "Game peran bermain aksi (RPG) yang mengisahkan kisah Geralt of Rivia, pemburu monster profesional, dalam pencarian untuk menemukan putrinya yang hilang di dunia yang penuh dengan bahaya dan intrik politik.",
          },
          {
            title: "Dark Souls III",
            id: 4,
            rate: 4.6,
            genre: "Action RPG",
            img: "https://m.media-amazon.com/images/I/91QuVskqO1L._SX385_.jpg",
            description: "Game RPG aksi yang dikenal karena tingkat kesulitan tinggi dan pertempuran yang menantang, membawa pemain ke dunia gelap yang penuh dengan rahasia dan monster menakutkan.",
          },
          {
            title: "Fortnite",
            id: 5,
            rate: 4.5,
            genre: "Battle Royale",
            img: "https://interfaceingame.com/wp-content/uploads/fortnite/fortnite-cover-375x500.jpg",
            description: "Game battle royale yang mendapatkan popularitas besar, di mana pemain bersaing untuk menjadi yang terakhir bertahan dalam pertempuran dengan berbagai senjata dan bangunan kreatif.",
          },

    ];
    const data = [
        {
            title: "The Legend of Zelda: Breath of the Wild",
            id: 1,
            rate: 4.9,
            genre: "Action-Adventure",
            img: "https://m.media-amazon.com/images/I/91Aa9ZIAaoL.__AC_SX300_SY300_QL70_ML2_.jpg",
            description: "Sebuah game aksi-petualangan epik yang mengikuti perjalanan Link dalam dunia terbuka yang luas, di mana pemain dapat menjelajahi, bertarung, dan memecahkan teka-teki dalam quest-quest menarik.",
          },
          {
            title: "Red Dead Redemption 2",
            id: 2,
            rate: 4.8,
            genre: "Action-Adventure",
            img: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
            description: "Game aksi-petualangan yang mengambil pemain kembali ke era Wild West, mengikuti Arthur Morgan, seorang penjahat yang mencari keadilan di dunia yang keras dan brutal.",
          },
          {
            title: "The Witcher 3: Wild Hunt",
            id: 3,
            rate: 4.7,
            genre: "Action RPG",
            img: "https://www.psegameshop.com/wp-content/uploads/2023/01/PS5-The-Witcher-3-Wild-Hunt-Complete-Edition-R3English-1.jpg",
            description: "Game peran bermain aksi (RPG) yang mengisahkan kisah Geralt of Rivia, pemburu monster profesional, dalam pencarian untuk menemukan putrinya yang hilang di dunia yang penuh dengan bahaya dan intrik politik.",
          },
          {
            title: "Dark Souls III",
            id: 4,
            rate: 4.6,
            genre: "Action RPG",
            img: "https://m.media-amazon.com/images/I/91QuVskqO1L._SX385_.jpg",
            description: "Game RPG aksi yang dikenal karena tingkat kesulitan tinggi dan pertempuran yang menantang, membawa pemain ke dunia gelap yang penuh dengan rahasia dan monster menakutkan.",
          },
          {
            title: "Fortnite",
            id: 5,
            rate: 4.5,
            genre: "Battle Royale",
            img: "https://interfaceingame.com/wp-content/uploads/fortnite/fortnite-cover-375x500.jpg",
            description: "Game battle royale yang mendapatkan popularitas besar, di mana pemain bersaing untuk menjadi yang terakhir bertahan dalam pertempuran dengan berbagai senjata dan bangunan kreatif.",
          },
          {
            title: "The Legend of Zelda: Breath of the Wild",
            id: 6,
            rate: 4.9,
            genre: "Action-Adventure",
            img: "https://m.media-amazon.com/images/I/91Aa9ZIAaoL.__AC_SX300_SY300_QL70_ML2_.jpg",
            description: "Sebuah game aksi-petualangan epik yang mengikuti perjalanan Link dalam dunia terbuka yang luas, di mana pemain dapat menjelajahi, bertarung, dan memecahkan teka-teki dalam quest-quest menarik.",
          },
          {
            title: "Red Dead Redemption 2",
            id: 7,
            rate: 4.8,
            genre: "Action-Adventure",
            img: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
            description: "Game aksi-petualangan yang mengambil pemain kembali ke era Wild West, mengikuti Arthur Morgan, seorang penjahat yang mencari keadilan di dunia yang keras dan brutal.",
          },
          {
            title: "The Witcher 3: Wild Hunt",
            id: 8,
            rate: 4.7,
            genre: "Action RPG",
            img: "https://www.psegameshop.com/wp-content/uploads/2023/01/PS5-The-Witcher-3-Wild-Hunt-Complete-Edition-R3English-1.jpg",
            description: "Game peran bermain aksi (RPG) yang mengisahkan kisah Geralt of Rivia, pemburu monster profesional, dalam pencarian untuk menemukan putrinya yang hilang di dunia yang penuh dengan bahaya dan intrik politik.",
          },
          {
            title: "Dark Souls III",
            id: 9,
            rate: 4.6,
            genre: "Action RPG",
            img: "https://m.media-amazon.com/images/I/91QuVskqO1L._SX385_.jpg",
            description: "Game RPG aksi yang dikenal karena tingkat kesulitan tinggi dan pertempuran yang menantang, membawa pemain ke dunia gelap yang penuh dengan rahasia dan monster menakutkan.",
          },
          {
            title: "Fortnite",
            id: 10,
            rate: 4.5,
            genre: "Battle Royale",
            img: "https://interfaceingame.com/wp-content/uploads/fortnite/fortnite-cover-375x500.jpg",
            description: "Game battle royale yang mendapatkan popularitas besar, di mana pemain bersaing untuk menjadi yang terakhir bertahan dalam pertempuran dengan berbagai senjata dan bangunan kreatif.",
          },
          
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { Data: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig 
                        title={item.title} 
                        img={item.img} 
                        genre={item.genre} 
                        rate={item.rate}
                        size={item.size}
                        color={item.color}
                        onClick={() => navigateToDetailPage(item)}
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
                                    rate={item.rate}
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
