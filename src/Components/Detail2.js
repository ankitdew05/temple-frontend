import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail2() {
  const param = useParams();

  const [img, setImg] = useState([""]);
  const [title, Settitle] = useState([""]);
  const [state, Setstate] = useState([""]);
  const [id, Setid] = useState("");

  useEffect(() => {
    getsingleData();
  }, []);

  const getsingleData = () => {
    axios.get("https://temple-ankit-backend.herokuapp.com/datas").then((response) => {
      console.log(param);
      Setid(param.id);
      Settitle(param.title);
      Setstate(param.state);
      console.log(param.title);
      // console.log(response.data[0]);
      // console.log(response.data[0].featuredTemples.imageLocations);
      setImg(response.data[0].mostVisitedTemples.imageLocations);
    });
  };

  return (
    <div>
      <div className=" flex lg:p-10 justify-center lg:h-[500px] h-[375px] w-full">
        <img
          className=" w-full  object-cover lg:rounded-lg"
          src={"https://templesofindia.org/assets/compressed/" + img[id]}
        ></img>
      </div>
      <div className="lg:p-10 lg:pb-0 m-5 lg:pt-0">
        <h1 className="font-bold text-3xl text-blue-700 ">{title}</h1>
        <p className="font-bold p-1 text-base">{state}</p>
      </div>
      <div className="lg:p-10 lg:mt-5 m-5 lg:pb-0 lg:pt-0">
        <p className="lg:w-2/3">
          Tryambakeshwar Shiva Temple is an ancient Hindu temple in the town of
          Trimbak, in the Trimbakeshwar tehsil in the Nashik District of
          Maharashtra, India, 28 km from the city of Nashik and 40 km from
          Nashik road. It is dedicated to Hindu god Shiva and is one of the
          twelve jyotirlingas where the Hindu genealogy registers at
          Trimbakeshwar, Maharashtra are kept. The origin of the sacred Godavari
          river is near Trimbak. Kusavarta kunda (sacred pond) in the temple
          premises, built by Shrimant Sardar Raosaheb Parnerkar who was the
          Fadnavis of Indore State, is the source of the Godavari River, the
          second longest river in peninsular India. A bust of Sardar Fadnavis
          and his wife can be seen on the edge of the kunda. The current temple
          was built by Peshwa Balaji Baji Rao after it was destroyed by
          invaders.
        </p>
      </div>
    </div>
  );
}

export default Detail2;
