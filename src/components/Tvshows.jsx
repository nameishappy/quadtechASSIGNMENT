import React, { useState, useEffect } from "react";
import Showcard from "./Showcard";
import axios from "axios";
import Summary from "./Summary";
import TicketBookingForm from "./TicketBookingForm";

const Tvshows = ({ shows, handleShowSelect }) => {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {shows.map((element, index) => {
          return (
            <div className="w-full" key={index}>
              {
                <Showcard
                  title={element.show.name}
                  imageUrl={
                    element.show.image && element.show.image.medium
                      ? element.show.image.medium
                      : "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg"
                  }
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
    </div>
  );
};

export default Tvshows;
