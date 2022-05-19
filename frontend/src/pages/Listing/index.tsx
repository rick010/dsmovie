import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movies";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            //axios.get(`http://localhost:3000/`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    //const movie = {
     //   id: 1,
     //   image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
     //   title: "The Witcher",
    //    count: 2,
     //   score: 4.5
    //};

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Listing;