import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const StyledLink = styled(NavLink)`
    color: black;

    &:hover{
        color: yellowgreen;
    }
`

export default function Movies(){
    // 1.this.state.

//2. useEffect(() => {
//     //http if need
// }, []);

// 3.get запрос записуємо в стейт 
// 4. мепаємо стейтs

    return (
        <>
        <h2>Hi from all movies</h2>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
return (
    <ul>
        <StyledLink key={movie} to={`${movie}`} >
        {movie}
        </StyledLink>
    </ul>

)
        })}
     
        </>
    )
}