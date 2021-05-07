import React from 'react';
import { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
     } from 'react-router-dom';
import './OneCardDraw.css'


class OneCardDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textDisplay: false,
            isEmptyState: true,
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    ToggleButton(){
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay,
        }));
    }

    triggerAddTripState = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isAddTripState: true
        })
    }


    componentDidMount() {
        // for initial data
        this.fetchData();
    }

    fetchData = () => {
        // fetch tarot api, will return 1 random card
        fetch("https://tarot.howlcode.com/api/v1/spreads/random_card")
            // fetch("https://tarot.howlcode.com/api/v1/spreads/three_cards")
            .then(response => response.json())
            .then(
                //handle the result
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                // handle error
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
    }

    render() {
        const { error, isLoaded, posts } = this.state;

        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        }

        else {
            return (
                <div className="Card">
                    {
                        posts.map(card => (

                            <div key={card.id} align="center">
                                <div className="Card-Info">

                                    <h2 style={{
                                        // fontSize: "30px", 
                                    }}>{card.name.toUpperCase()}</h2>

                                    <img src={card.image} alt="Random Tarot Card Returned" />

                                    <h4 style={{
                                        fontSize: "20px",
                                        textAlign: "center"
                                    }}>{card.upright.toUpperCase()}</h4>

                                    <div className="Card-Info-Summary">
                                        <h5>Summary:</h5>
                                        <p style={{

                                            fontSize: "20px",
                                            textAlign: "center"
                                        }}>{card.summary} </p>
                                        <h5>Full Meaning:</h5>
                                        <p style={{

                                            fontSize: "20px",
                                            textAlign: "center"
                                        }}>{card.full_meaning}</p>
                                    </div>
                                </div>
                                
                                    <Router>

                                    <Link to='/App'></Link>
                                    Reset
                                    </Router>


                            </div>
                        ))
                    }

                


                </div>
            );
        }
    }
}
export default OneCardDraw;