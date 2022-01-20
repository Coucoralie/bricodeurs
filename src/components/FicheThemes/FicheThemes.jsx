import React from "react";
// import { Link } from "react-router-dom";
import cuisine from "../../assets/images/cuisine.jpeg";
import cuisine2 from "../../assets/images/cuisine2.jpeg";
import cuisine3 from "../../assets/images/cuisine3.jpeg";

const FicheThemes = () => {
  return (
    <div class="flex flex-col">
      <div class="grid grid-cols-2">
        <div class="max-w-screen-xl p-5 sm:p-10 md:p-16 col-start-1 col-end-7">
          <div class="rounded overflow-hidden flex flex-col max-w-xl">
            {/* <Link to=""> */}
            <img class="w-full" src={cuisine} alt="cuisine" />
            {/* </Link> */}
            <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
              <h2 class="text-2xl font-semibold text-sky-500">Kitchen</h2>
              <p class="text-gray-500 text-sm font-semibold">
                It's simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-2">
        <div class="max-w-screen-xl mx-right p-5 sm:p-10 md:p-16 col-end-7 col-span-1">
          <div class="rounded overflow-hidden flex flex-col max-w-xl mx-right">
            {/* <Link to=""> */}
            <img class="w-full" src={cuisine2} alt="cuisine" />
            {/* </Link> */}
            <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
              <h2 class="text-2xl font-semibold text-sky-500">Kitchen</h2>
              <p class="text-gray-500 text-sm font-semibold">
                It's simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-2">
        <div class="max-w-screen-xl p-5 sm:p-10 md:p-16 col-start-1 col-end-7">
          <div class="rounded overflow-hidden flex flex-col max-w-xl">
            {/* <Link to=""> */}
            <img class="w-full" src={cuisine3} alt="cuisine" className="img" />
            {/* </Link> */}
            <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
              <h2 class="text-2xl font-semibold text-sky-500">Kitchen</h2>
              <p class="text-gray-500 text-sm font-semibold">
                It's simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FicheThemes;
