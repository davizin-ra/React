import {createContext, useContext, useState} from "react";

export const FavoriteContext = createContext()
FavoriteContext.displayName = "MyFavorites "

export default function FavoriteProvider({children}){
    const [ favorite, setFavorite ] = useState([])

    return(
        <FavoriteContext.Provider
        
            value={{favorite,setFavorite}}
        >

            {children}
        </FavoriteContext.Provider>
    );
}

export function UseFavoriteContext(){
    const { favorite, setFavorite } = useContext(FavoriteContext)

    function addFavorite(nemFavorite){
        
        const repeatFavorite = favorite.some((item) => item.id === nemFavorite.id)

        let newList = [...favorite]

        if(!repeatFavorite){
            newList.push(nemFavorite)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav) => fav.id !== nemFavorite.id)
        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }
}