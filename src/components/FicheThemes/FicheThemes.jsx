import React from "react";
// import { Link } from "react-router-dom";
import cuisine from "../../assets/images/cuisine.jpeg";

const FicheThemes = () => {
  return (
    <div class="">
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          {/* <Link to=""> */}
            <img class="w-full" src={cuisine} alt="cuisine" />
          {/* </Link> */}
          <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
            <h2 class="text-2xl font-semibold text-sky-500">Salon</h2>
            <p class="text-gray-500 text-sm font-semibold">
              It's simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          {/* <Link to=""> */}
            <img class="w-full" src={cuisine} alt="cuisine" />
          {/* </Link> */}
          <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
            <h2 class="text-2xl font-semibold text-sky-500">Kitchen</h2>
            <p class="text-gray-500 text-sm font-semibold">
              It's simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          {/* <Link to=""> */}
            <img class="w-full" src={cuisine} alt="cuisine" className="img" />
          {/* </Link> */}
          <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
            <h2 class="text-2xl font-semibold text-sky-500">Bathroom</h2>
            <p class="text-gray-500 text-sm font-semibold">
              It's simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheThemes;
