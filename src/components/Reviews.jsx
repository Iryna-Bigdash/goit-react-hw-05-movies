import { useParams } from "react-router-dom";

export default function Reviews(){
    const {movieId} = useParams();
    return(
        <ul>
            <li><h3>Author: {movieId}</h3></li>
            <li><p>text of review</p></li>
        </ul>
    )
  
}
