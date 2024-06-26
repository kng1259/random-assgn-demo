import React from "react";
import { useState } from "react";

const AppointmentForm = () => {
   const [value, setValues] = useState({
      activity: "",
      subject: "",
      HI: false,
      time: "",
      date: "",
      message: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(value);
   };

   const handleReset = () => {
      const reset = {
         activity: "",
         subject: "",
         HI: false,
         time: "",
         date: "",
         message: "",
      };
      setValues(reset);
   };
   const handleChange = (e) => {
      setValues({ ...value, [e.target.name]: e.target.value });
   };

   return (
      <form
         onSubmit={(e) => handleSubmit(e)}
         onReset={handleReset}
         className="flex flex-col w-4/5 mx-auto my-4 text-base font-yeseva"
      >
         <ul className="w-full mx-auto  grid grid-cols-2 gap-2  items-stretch *:py-2">
            <li className="flex flex-col gap-1">
               <label htmlFor="activity">Activity Type</label>
               <select
                  onChange={(e) => handleChange(e)}
                  className={`border-2 border-gray-300 px-1 py-2 rounded-md bg-white `}
                  type="text"
                  name="activity"
                  id="activity"
                  required
               >
                  <option value="" selected hidden>
                     Select an activity
                  </option>
                  <option value="examination">Medical examination</option>
                  <option value="consultation">Consultation</option>
                  <option value="treatment">Treatment</option>
                  <option value="therapy">Therapy</option>
               </select>
            </li>
            <li className="flex flex-col gap-1">
               <label htmlFor="subject">Subject</label>
               <input
                  onChange={(e) => handleChange(e)}
                  className="border-2 border-gray-300 p-1 rounded-md"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="SasS order time"
               />
            </li>
            <li className="flex flex-col gap-1">
               <label htmlFor="time">Time</label>
               <select
                  onChange={(e) => handleChange(e)}
                  className={`border-2 border-gray-300 px-1 py-2 rounded-md bg-white `}
                  name="time"
                  id="time"
                  required
               >
                  <option value="" selected hidden>
                     Select time
                  </option>
                  <option value="8">8AM - 10AM</option>
                  <option value="10">10AM - 12AM</option>
                  <option value="13">1PM - 3PM</option>
                  <option value="15">3PM - 5PM</option>
               </select>
            </li>
            <div className="flex justify-between">
               <li className="flex flex-col gap-1 ">
                  <label htmlFor="date">Date</label>
                  <div className="flex gap-1 items-stretch">
                     <input
                        onChange={(e) => handleChange(e)}
                        type="date"
                        className="border-2 border-gray-300 p-1 rounded-md"
                        id="date"
                        name="date"
                        required
                     />
                  </div>
               </li>
               <li className="flex gap-1 items-center">
                  <input
                     onClick={() => {
                        value.HI = !value.HI;
                        handleChange({
                           target: { name: "HI", value: value.HI },
                        });
                     }}
                     type="checkbox"
                     id="HI"
                     name="HI"
                     value="HI"
                  />
                  <label htmlFor="HI">Health Insurance</label>
               </li>
            </div>
         </ul>
         <hr className="w-full h-px my-2 bg-white/50" />
         <textarea
            onChange={(e) => handleChange(e)}
            className="border-2 border-gray-300 my-2 p-2 rounded-md"
            name="message"
            id="message"
            rows="3"
            placeholder="Message"
         ></textarea>
         <div className="self-end flex gap-2">
            <button
               type="reset"
               className=" text-skyblue rounded-md border-gray-300 hover:bg-gray-200  border-2 px-4 py-2"
            >
               Reset
            </button>
            <button
               type="submit"
               className="bg-skyblue/80 hover:bg-skyblue text-white rounded-md px-4 py-2"
            >
               Submit
            </button>
         </div>
      </form>
   );
};

export default AppointmentForm;
