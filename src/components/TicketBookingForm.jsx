import { useState } from "react";
const TicketBookingForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="container mx-auto">
    <div className=" flex justify-center flex-col max-w-[1200px] bg-gray-300 p-10 border-2 rounded-3 mx-auto">
      <h2 className="text-3xl text-[blue] text-semibold mb-3 ">Ticket Booking Form</h2>
      <h2 className="text-xl text-black ">ShowName: {props.movieName}</h2>
      <h2 className="text-xl text-black mb-3 ">Language: {props.language} </h2>

      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium "
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name"
            required
            />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            required
            />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium "
            >
            Enter number of tickets
          </label>
          <input
            type="number"
            id="ticketNum"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border  rounded focus:ring-3 focus:ring-blue-300 "
              required
              />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium "
          >
            Remember me
          </label>
        </div>
        <button
       
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default TicketBookingForm;
