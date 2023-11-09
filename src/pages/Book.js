import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import { useNavigate } from "react-router-dom";

export default function Book() {
    const navigate = useNavigate();

    const poster = [
        {
            title: "The Great Gatsby",
            id: 1,
            rate: 4.2,
            genre: "Fiksi, Klasik",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59R2/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Sebuah novel klasik yang ditulis oleh F. Scott Fitzgerald, menceritakan tentang kehidupan penuh kemewahan dan intrik di era Roaring Twenties di Amerika Serikat.",
          },
          {
            title: "To Kill a Mockingbird",
            id: 2,
            rate: 4.5,
            genre: "Fiksi, Drama",
            img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
            description: "Novel klasik karya Harper Lee yang menyoroti ketidakadilan rasial dan moral di Amerika Serikat Selatan pada tahun 1930-an, diceritakan melalui mata seorang anak perempuan bernama Scout Finch.",
          },
          {
            title: "1984",
            id: 3,
            rate: 4.3,
            genre: "Fiksi, Dystopian",
            img: "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/51-XRKboGbL._SY445_SX342_.jpg",
            description: "Novel distopia yang ditulis oleh George Orwell, menggambarkan sebuah masyarakat yang diperintah oleh pemerintah otoriter dan mengawasi setiap gerakan warganya, mempertanyakan konsep kebebasan dan privasi.",
          },   
          {
            title: "The Great Gatsby",
            id: 4,
            rate: 4.2,
            genre: "Fiksi, Klasik",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59R2/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Sebuah novel klasik yang ditulis oleh F. Scott Fitzgerald, menceritakan tentang kehidupan penuh kemewahan dan intrik di era Roaring Twenties di Amerika Serikat.",
          },
          {
            title: "To Kill a Mockingbird",
            id: 5,
            rate: 4.5,
            genre: "Fiksi, Drama",
            img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
            description: "Novel klasik karya Harper Lee yang menyoroti ketidakadilan rasial dan moral di Amerika Serikat Selatan pada tahun 1930-an, diceritakan melalui mata seorang anak perempuan bernama Scout Finch.",
          },
          {
            title: "1984",
            id: 6,
            rate: 4.3,
            genre: "Fiksi, Dystopian",
            img: "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/51-XRKboGbL._SY445_SX342_.jpg",
            description: "Novel distopia yang ditulis oleh George Orwell, menggambarkan sebuah masyarakat yang diperintah oleh pemerintah otoriter dan mengawasi setiap gerakan warganya, mempertanyakan konsep kebebasan dan privasi.",
          },     
    ];
    const data = [
        {
            title: "The Great Gatsby",
            id: 1,
            rate: 4.2,
            genre: "Fiksi, Klasik",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59R2/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Sebuah novel klasik yang ditulis oleh F. Scott Fitzgerald, menceritakan tentang kehidupan penuh kemewahan dan intrik di era Roaring Twenties di Amerika Serikat.",
          },
          {
            title: "To Kill a Mockingbird",
            id: 2,
            rate: 4.5,
            genre: "Fiksi, Drama",
            img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
            description: "Novel klasik karya Harper Lee yang menyoroti ketidakadilan rasial dan moral di Amerika Serikat Selatan pada tahun 1930-an, diceritakan melalui mata seorang anak perempuan bernama Scout Finch.",
          },
          {
            title: "1984",
            id: 3,
            rate: 4.3,
            genre: "Fiksi, Dystopian",
            img: "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/51-XRKboGbL._SY445_SX342_.jpg",
            description: "Novel distopia yang ditulis oleh George Orwell, menggambarkan sebuah masyarakat yang diperintah oleh pemerintah otoriter dan mengawasi setiap gerakan warganya, mempertanyakan konsep kebebasan dan privasi.",
          }, 
          {
            title: "The Great Gatsby",
            id: 4,
            rate: 4.2,
            genre: "Fiksi, Klasik",
            img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59R2/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
            description: "Sebuah novel klasik yang ditulis oleh F. Scott Fitzgerald, menceritakan tentang kehidupan penuh kemewahan dan intrik di era Roaring Twenties di Amerika Serikat.",
          },
          {
            title: "To Kill a Mockingbird",
            id: 5,
            rate: 4.5,
            genre: "Fiksi, Drama",
            img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
            description: "Novel klasik karya Harper Lee yang menyoroti ketidakadilan rasial dan moral di Amerika Serikat Selatan pada tahun 1930-an, diceritakan melalui mata seorang anak perempuan bernama Scout Finch.",
          },
          {
            title: "1984",
            id: 6,
            rate: 4.3,
            genre: "Fiksi, Dystopian",
            img: "https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/51-XRKboGbL._SY445_SX342_.jpg",
            description: "Novel distopia yang ditulis oleh George Orwell, menggambarkan sebuah masyarakat yang diperintah oleh pemerintah otoriter dan mengawasi setiap gerakan warganya, mempertanyakan konsep kebebasan dan privasi.",
          }, 
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { Data: item } });
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
