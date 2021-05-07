import './Draw.css';
import React from 'react';





function Draw() {
    
    return (
        <div className="Draw">
            <div className="Draw-One">
                <h4>Daily 1 Card Draw</h4>
                <button className="Draw-One-Button">Draw</button>
            </div>
            <br/>
            <div className="Draw-Three">
                <h4>3 Card Draw</h4>
                <h5>Past, Present, Future</h5>
                <button className="Draw-Three-Button">Draw 3</button>
            </div>
        </div>
    );
}

export default Draw;














/*
function Card() {
    const [tarotCard, setTarotCard] = useState(0);

    const apiURL = "https://tarot.howlcode.com/api/v1/spreads/random_card";

    const randomCard = async () => {
        const fetchData = await axios.get(apiURL);
        tarotCard(response.data);
        setTarotCard()
    }


    return (
        <div className="Card">
             <button>Draw</button>
            <div className="Card-Box">
                <img src={randomCard} alt=""/>


            </div>
            <div className="Card-Box-Info">

            </div>

        </div>
    );
}
export default Card;
*/






