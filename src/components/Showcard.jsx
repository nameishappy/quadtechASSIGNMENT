import React, { useState, useEffect } from "react";

const Showcard = (props) => {
  const handleOnClick = (showId) => {
    props.onShowSelect(showId);
  };
  return (
    <div className="flex justify-center">
      <div className=" flex justify-center items-center flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a className="w-full" href="#">
          <img
            className="rounded-t-lg cover no-repeat center w-full h-[400px]"
            src={props.imageUrl}
            alt=""
          />
        </a>
        <div className="p-5 w-full">
          <h3 className="text-3xl mb-2 text-gray-700">Show info</h3>
          <a href="#">
            <p className="mb-2 text-xl font-semibold tracking-tight text-gray-700">
              <span className="font-bold text-2xl">Title: </span>
              {props.title}
            </p>
          </a>
          <p className="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            <span className="font-bold text-2xl">Language: </span>
            {props.language}
          </p>
          {/* <p className="mb-2 text-xl font-semibold tracking-tight text-gray-700"><span className="font-bold text-2xl">Network: </span><a href="#">{props.network.name}</a></p> */}
          <p className="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            <span className="font-bold text-2xl">Rating: </span> {props.rating}
          </p>
          <p className="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            <span className="font-bold text-2xl">Status: </span> {props.status}
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 focus:outline-none"
            onClick={() => handleOnClick(props.id)}
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcard;
