import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([""]);
  const [data1, setData1] = useState([""]);
  const [data2, setData2] = useState([""]);

  const [img, setImg] = useState([""]);
  const [img1, setImg1] = useState([""]);
  const [img2, setImg2] = useState([""]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://temple-ankit-backend.herokuapp.com/datas").then((response) => {
      // console.log(response.data[0]);

      console.log(response.data[0].featuredTemples.imageLocations);
      for (let value of Object.values(
        response.data[0].featuredTemples.imageLocations
      )) {
        setImg(response.data[0].featuredTemples.imageLocations);
      }
      setData(response.data[0].featuredTemples.temples);
      setData1(response.data[0].mostVisitedTemples.temples);
      setData2(response.data[0].recentlyAddedTemples.temples);
      // console.log(setData.featured_image);
      setImg(response.data[0].featuredTemples.imageLocations);
      setImg1(response.data[0].mostVisitedTemples.imageLocations);
      setImg2(response.data[0].recentlyAddedTemples.imageLocations);
    });
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 425;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 425;
  };

 
  return (
    <div className="bg-[#F5F5F5] pb-10">
      <div className="relative flex items-center ">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />

        <div
          id="slider"
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data2.map((value, item) => (
            <div className="inline-block w-full h-[414px] lg:w-full lg:h-[500px] lg:p-2 ">
              <Link
                to={
                  "/detail/" +
                  value.featured_image +
                  "/" +
                  value.title +
                  "/" +
                  value.state
                }
              >
                <img
                  className=" pt-4 w-full h-full  object-cover  inline-block lg:p-2 cursor-pointer "
                  src={
                    "https://templesofindia.org/assets/compressed/" +
                    img2[value.featured_image]
                  }
                  alt="/"
                />
              </Link>
            </div>
          ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>

      <div className="  md:ml-[120px] ml-[36px]  text-blue-900">
        <h1 className="font-bold text-3xl p-5">Latest Temples</h1>
      </div>
      <div className="relative flex items-center ml-[36px]  md:ml-[107px]">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((key, item) => (
            <div className="  inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <Link
                to={
                  "/detail1/" +
                  key.featured_image +
                  "/" +
                  key.title +
                  "/" +
                  key.state
                }
              >
                <img
                  className="rounded-xl w-[197px] h-[119px]   object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={
                    "https://templesofindia.org/assets/compressed/" +
                    img[key.featured_image]
                  }
                  alt="/"
                />
              </Link>
              <p className="font-bold text-base overflow-hidden p-1 pb-0 w-[190px] ">
                <Link
                  to={
                    "/detail1/" +
                    key.featured_image +
                    "/" +
                    key.title +
                    "/" +
                    key.state
                  }
                >
                  {key.title}
                </Link>
              </p>
              <p className="font-thin text-sm p-1 pt-0">
                <ImLocation className="text-xm inline-block text-orange-500"></ImLocation>
                {key.locality}
              </p>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>

      <div>
        <div className="md:ml-[120px] ml-[36px] text-blue-900">
          <h1 className="font-bold text-3xl p-5">Most Visited</h1>
        </div>
        <div className="relative flex items-center  ml-[36px] md:ml-[107px]">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data1.map((value, item) => (
              <div className="  inline-block p-2 cursor-pointer w-[197px] hover:scale-105 ease-in-out duration-300">
                <Link
                  to={
                    "/detail2/" +
                    value.featured_image +
                    "/" +
                    value.title +
                    "/" +
                    value.state
                  }
                >
                  <img
                    className="rounded-xl w-[197px] h-[119px]   object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    src={
                      "https://templesofindia.org/assets/compressed/" +
                      img1[value.featured_image]
                    }
                    alt="/"
                  />
                </Link>
                <p className="font-bold text-base p-1 pb-0 overflow-hidden w-[190px]">
                  <Link
                    to={
                      "/detail2/" +
                      value.featured_image +
                      "/" +
                      value.title +
                      "/" +
                      value.state
                    }
                  >
                    {value.title}
                  </Link>
                </p>
                <p className="font-thin text-sm p-1 pt-0">
                  <ImLocation className="text-xm inline-block text-orange-500"></ImLocation>
                  {value.state}
                </p>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

/*const [festureimg, Setfeatuteimg] = useState("");
  const [mostviewimg, Setmostviewimg] = useState("");
  const [latestimg, Setlatestimg] = useState("");

  const [mloc, Setmloc] = useState("");
  const [floc, Setfloc] = useState("");
  const [lloc, Setlloc] = useState("");

  const [ftitle, Setftitle] = useState("");
  const [mtitle, Setmtitle] = useState("");
  const [ltitle, Setltitle] = useState("");*/

/*Setfeatuteimg(response.data[0].featuredTemples.imageLocations);
      Setmostviewimg(response.data[0].mostVisitedTemples.imageLocations);
      Setlatestimg(response.data[0].recentlyAddedTemples.imageLocations);

      Setfloc(response.data[0].featuredTemples.temples[0].state);
      Setmloc(response.data[0].mostVisitedTemples.temples[0].state);
      Setlloc(response.data[0].recentlyAddedTemples.temples[0].state);

      Setftitle(response.data[0].featuredTemples.temples[0].title);
      Setmtitle(response.data[0].mostVisitedTemples.temples[0].title);
      Setltitle(response.data[0].recentlyAddedTemples.temples[0].title);*/
/*function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
function getValueByKey(object, key) {
  return Object.values(object).find((value) => object[value] === key);
}*/
