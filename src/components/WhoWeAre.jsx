import React from "react";

const WhoWeAre = () => {
  return (
    <section
      id="about"
      className="h-[100vh] w-full flex justify-center items-center snap-center pt-16"
    >
      <div className="flex justify-center items-center h-3/4 w-9/12 bg-white shadow-xl rounded-xl">
        <div className="flex flex-col justify-center items-center px-12 w-[80vh] h-[60vh]">
          <h1>¿Quiénes somos?</h1>
          <br />
          <p className="indent-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            incidunt sed rem doloremque cupiditate nesciunt vitae dolorum dicta
            id officia veritatis, rerum aliquam quidem ab. Dolorem voluptas
            quisquam similique aspernatur.
          </p>
          <br />{" "}
          <p className="indent-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            inventore debitis nulla.
          </p>
        </div>
        <div className="flex justify-center items-center w-[80vh] h-[60vh]">
          <img className="w-9/12" src="/img/logo.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
