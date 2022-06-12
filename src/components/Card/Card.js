import styled from "styled-components";
import {Link} from "react-router-dom";
import * as AppConstants from "../../AppConstants";
const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
@media only screen and (min-width: 992px) {
    justify-content: flex-start
}
@media only screen and (max-width: 1200px) {
    justify-content: space-evenly
}
@media only screen and (min-width: 1200px) {
    justify-content: space-evenly
}
`
const CardContent = styled.div`
flex: 0 0 24%;
text-align: center;
color: white;
background-color: DimGray;
margin: 1rem;
padding: 1rem;
@media screen and (max-width: 600px) {
    margin: 1rem auto;
    padding: 1rem;
}
@media screen and (min-width: 600px) {
    margin: 1rem auto
    padding: 1rem;
}
@media only screen and (min-width: 992px) {
    margin: 0.2rem;
    padding: 0.1rem;
}
@media only screen and (min-width: 1200px) {
    margin: 0.1rem;
    padding: 0.1rem;
}
`

const Card = (props) => {
    return props.poster.length > 0 && <CardWrapper>
       {props.poster.map((card) => <CardContent key={card.imdbID}>{
           <>
           <Link to={`/${card.imdbID}`} style={{color: "white"}}>
           <h3><strong>{card.Title}</strong></h3>
           <img src={card.Poster !== "N/A" ? card.Poster : AppConstants.DUMMY_IMAGE_PATH} alt="poster" width="300px" height="450px" img-fluid="true"></img>
           <p><big><strong>{card.Year}</strong></big></p>
           </Link>
           </>
        }</CardContent>)} 
    </CardWrapper>
}
export default Card;