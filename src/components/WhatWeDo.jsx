import React from "react";
import { FaWifi } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { TbDeviceImac } from "react-icons/tb";

const WhatWeDo = () => {
  return (
    <section
      id="WhatWeDo"
      className="h-[100vh] flex justify-center items-center snap-center pt-16"
    >
      <div className="flex h-full w-full justify-center items-center">
        <div className="w-1/3 p-8 flex items-center justify-center ml-20">
          <div className="flex flex-col justify-center items-center bg-white h-[65vh] w-[53vh] rounded-xl shadow-lg ml-4 gap-5 px-10">
            <FaWifi className="w-[140px] h-[140px]" />
            <h1 className="font-bold text-2xl">Internet ultra veloz</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              laudantium quisquam cum vero iusto dolorem error quam maiores non
              sit aliquid ab, beatae accusantium quasi odit repudiandae eum
              quaerat ratione unde exercitationem?
            </p>
          </div>
        </div>
        <div className="w-1/3 p-8 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center bg-white h-[65vh] w-[53vh] rounded-xl shadow-lg ml-4 gap-5 px-10">
            <SlSpeedometer className="w-[140px] h-[140px]" />
            <h1 className="font-bold text-2xl">Descarga rápida e ilimitada</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              laudantium quisquam cum vero iusto dolorem error quam maiores non
              sit aliquid ab, beatae accusantium quasi odit repudiandae eum
              quaerat ratione unde exercitationem?
            </p>
          </div>
        </div>
        <div className="w-1/3 p-8 flex items-center justify-center mr-20">
          <div className="flex flex-col justify-center items-center bg-white h-[65vh] w-[53vh] rounded-xl shadow-lg ml-4 gap-5 px-10">
            <TbDeviceImac className="w-[140px] h-[140px]" />
            <h1 className="font-bold text-2xl">Última generación en equipos</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              laudantium quisquam cum vero iusto dolorem error quam maiores non
              sit aliquid ab, beatae accusantium quasi odit repudiandae eum
              quaerat ratione unde exercitationem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
