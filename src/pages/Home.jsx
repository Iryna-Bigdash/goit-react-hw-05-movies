import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
    color: black;

    &.active{
        color: yellowgreen;
    }
`

export default function Home(){
    
// useEffect(() => {
//     //http if need
// }, []);



return (
<div>
    <h1>Trading today</h1>

        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
return (
    <ul>
        <li>
        <StyledLink key={movie} to={`${movie}`} >
        {movie}
        </StyledLink>
        </li>
    </ul>
)
        })}
     
    </div>
)
}