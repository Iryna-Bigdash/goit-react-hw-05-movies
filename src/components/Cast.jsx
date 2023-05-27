import { useParams } from "react-router-dom"

export default function Cast(){
     // state
  // ISLOADING
  // ERROR

  // useEffect(() => {
  //     //http if need
  // }, []);
  const {movieId} = useParams();
  return(
    <ul>
        <li><img src="" alt="ActorsPhoto" /></li>
        <li><p>Name: {movieId} </p></li>
        <li><p>Character:</p></li>
    </ul>
  )
}
