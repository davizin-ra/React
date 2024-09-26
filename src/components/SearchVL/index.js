import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVL.module.css"
import Loader from "../Loader";


function filterVideos({videos, searchText}){

    return videos.filter( (video) => video.category.includes(searchText) || 
    video.title.includes(searchText) )

}

function SearchVL({videos}){

    const [searchText, setSearchText] = useState('')  
    const foundVideos = filterVideos({videos, searchText})

    const [loading, setloading ] = useState(true)
    useEffect(() =>{
        setTimeout(() => setloading(false), 500)
    }, [])

    return(

        <section className={styles.container}>

            <input 
            type="search" 
            placeholder="Pesquisar..." 
            value = {searchText} 
            onChange = {e => setSearchText(e.target.value )}
            >
            </input>

        { 
            loading ? <Loader/>:
            <VideoList 
                videos={foundVideos}
                emptyHeading={`Sem Videos sobre ${searchText}`}
            >

            </VideoList>
        }   

        </section>


    );

}

export default SearchVL;