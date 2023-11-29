import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8tb9s2b",
        "template_hiudy3i",
        {
          from_name: form.name,
          to_name: "Abdo77",
          from_email: form.email,
          to_email: "abdoguigue@gmail.com",
          message: form.message,
        },
        "-HTxQm1srwoqZWrq_"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias. Nos pondremos en contacto contigo lo antes posible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Algo salió mal, por favor intenta de nuevo más tarde.");
        }
      );
  };
  return (
    <section className="min-[1920px]:h-screen xl:h-[1200px] md:h-[850px] h-[725px] w-full flex flex-col items-center justify-around snap-center">
      <div className="flex flex-col gap-10 w-[80%] md:w-[45%] xl:mt-[220px]">
        <h1 className="text-3xl md:text-5xl text-red-600 text-center font-bold">
          Contáctanos
        </h1>
        <div className="bg-red-600 w-full px-8 pb-8 rounded-3xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 pt-5 min-[1440px]:pt-12"
          >
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-2">Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="¿Cuál es tu nombre?"
                className="py-4 px-6 placeholder:text-gray-600 text-black rounded-lg outline-none border-none font-semibold "
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-2">
                Correo electrónico
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="¿Cuál es tu correo?"
                className="bg-tertiary py-4 px-6 placeholder:text-gray-600 text-black rounded-lg outline-none border-none font-semibold"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-2">Mensaje</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="¿Qué quieres decirnos?"
                className="bg-tertiary py-4 px-6 placeholder:text-gray-600 text-black rounded-lg outline-none border-none font-semibold"
              />
            </label>
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-500 hover:shadow-xl transition duration-500 py-3 px-12 rounded-xl outline-none w-fit text-white font-bold shadow-2xl drop-shadow-2xl shadow-primary"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[100px] xl:h-0" />
      <div>
        <ul className="flex flex-row gap-4 mb-5 px-3">
          <a href="#home">
            <li className="cursor-pointer">Abdo77 © 2023</li>
          </a>
          <li className="cursor-pointer">Privacidad y legal</li>

          <a target="_blank" rel="noreferrer" href="https://wa.me/584128322236">
            <li className="cursor-pointer">Contacto</li>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
