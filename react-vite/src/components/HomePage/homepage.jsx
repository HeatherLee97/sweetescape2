import { useState } from "react";
import './HomePage.css'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ItineraryPage from "../ItineraryPage/itinerarypage";


function HomePage() {

    const user = useSelector(state => state.session.user);

    return (
        <div className="dashboard-content">

     <h1> Welcome {user?.Username}!</h1>

     <div className="itinerary">
        <ItineraryPage
        className="todo"
        />
     </div>




        </div> //end of dashboard-container

    )

}

export default HomePage;
