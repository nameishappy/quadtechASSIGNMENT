import React, { useState, useEffect } from "react";
import Showcard from "./Showcard";
import axios from "axios";
import Summary from "./Summary";
import TicketBookingForm from "./TicketBookingForm";

const Tvshows = () => {
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

  const handleBookTicket = () => {
    setIsBookingOpen(true);
  };

  const handleFormClose = () => {
    setIsBookingOpen(false);
  };

  useEffect(() => {
  }, [selectedShow, ShowSummary]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container mx-auto my-8">
      {!selectedShow && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {shows.map((element, index) => {
            return (
              <div className="w-full" key={index}>
                {
                  <Showcard
                    title={element.show.name}
                    imageUrl={element.show.image.medium}
                    network={element.show.network}
                    language={element.show.language}
                    rating={element.show.rating.average}
                    status={element.show.status}
                    onShowSelect={handleShowSelect}
                    id={element.show.id}
                  />
                }
              </div>
            );
          })}
        </div>
      )}
      {selectedShow && ShowSummary && !isBookingOpen && (
        <Summary onBookTicket={handleBookTicket} el={ShowSummary} />
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

export default Tvshows;
