import React from "react";
import VideoTutorial from "../../../components/VideoTurorial";
import NavbarTutorialsMenu from "../../../components/NavbarTutorialsMenu";

const VSOL = () => {
  return (
    <>
      <NavbarTutorialsMenu />
      <section className=" flex flex-col gap-20 justify-center">
        <div className="h-12"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px]  font-semibold">
            Cambio de contraseña Router VSOL V2804AC-Z
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/0W5URivwx6c?si=k_e6wG3CfQxQXfKA" />

          <p className="text-lg w-[760px]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: admin <br />
            <br /> Contraseña: stdONU101.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px]  font-semibold">
            Tutorial de lista blanca VSOL V2804AC-Z
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/XQNy9D67DqE?si=KCg0GlOcc9lm7Ql7" />
          <p className="text-lg w-[760px]">
            Para administrar el router deben ingresar a la dirección:
            192.168.1.1 <br />
            <br />
            Usuario: admin <br />
            <br /> Contraseña: stdONU101. <br />
            <br />
            El nombre del wifi lo cambian en el mismo menú, la opción se llama
            "SSID".
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[40px]  font-semibold">
            Cambio de clave Router VSOL V2802DAC
          </h1>
          <VideoTutorial videoSrc="https://www.youtube.com/embed/XQNy9D67DqE?si=KCg0GlOcc9lm7Ql7" />
          <p className="text-lg w-[760px]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: admin <br />
            <br /> Contraseña: stdONU101.
          </p>
        </div>
        <div className="h-20"></div>
      </section>
    </>
  );
};

export default VSOL;
