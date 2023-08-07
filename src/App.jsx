import React, { useEffect, useState } from "react";
import Tvshows from "./components/Tvshows";
import Navbar from "./components/Navbar";
import TicketBookingForm from "./components/TicketBookingForm";
import Summary from "./components/Summary";
import axios from "axios";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [ShowSummary, setShowSummary] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleShowSelect = (showId) => {
    // Fetch show summary based on the selected show

    setSelectedShow(showId);
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setShowSummary(data));
  };

  const handleBackClick = () => {
    setSelectedShow(null);
  };
  const handleBookTicket = () => {
    setIsBookingOpen(true);
  };

  const handleFormClose = () => {
    setIsBookingOpen(false);
  };

  useEffect(() => {
    console.log(ShowSummary);
  }, [selectedShow, ShowSummary]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        console.log(response.data);
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <Navbar />
      {!selectedShow && (
        <Tvshows shows={shows} handleShowSelect={handleShowSelect} />
      )}
      {selectedShow && ShowSummary && !isBookingOpen && (
        <Summary
          onBookTicket={handleBookTicket}
          onBackClick={handleBackClick}
          el={ShowSummary}
        />
      )}
      {isBookingOpen && (
        <TicketBookingForm
          movieName={ShowSummary.name}
          language={ShowSummary.language}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default App;
