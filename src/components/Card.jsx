import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Card = ({
  tutorialImg,
  tutorialTexto,
  tituloTutorial,
  TutorialLinks,
}) => {
  return (
    <>
      <div className="bg-slate-800 h-[500px] min-[375px]:h-[530px] md:h-[620px] md:w-[320px] lg:h-[580px] lg:w-[400px] rounded-2xl text-white">
        <div className="w-full h-full">
          <img
            className="w-full h-[38%] rounded-t-2xl object-cover"
            src={tutorialImg}
            alt="tutorial-img"
          />
          <div className="text-center px-5">
            <h1 className="text-2xl min-[375px]:text-3xl md:text-4xl font-semibold mt-6 md:mt-8">
              {tituloTutorial}
            </h1>
            <p className="text-sm min-[375px]:text-base md:text-lg my-6 md:my-8">
              {tutorialTexto}
            </p>
            <RouteLink to={TutorialLinks}>
              <div>
                <button className="text-xl border-[3px] border-slate-700 hover:border-slate-600 hover:bg-slate-700 p-3 rounded-2xl transition-all cursor-default lg:cursor-pointer">
                  Ver más...
                </button>
              </div>
            </RouteLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
