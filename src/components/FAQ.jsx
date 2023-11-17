import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section class="text-gray-900  xl:h-screen h-[900px] flex flex-col items-center justify-center snap-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.15,
          duration: 0.65,
        }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        class="container px-5 py-24 mx-auto"
      >
        <div class="text-center mb-20">
          <p class="text-base font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Respondemos a tus
          </p>
          <h1 class="sm:text-5xl text-3xl font-medium text-center title-font text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="w-full lg:w-1/2 px-4 py-2">
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                How Long is this site live?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                Can I install/upload anything I want on there?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                How can I migrate to another site?
              </summary>

              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
          <div class="w-full lg:w-1/2 px-4 py-2">
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                Can I change the domain you give me?
              </summary>

              <span class="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                How many sites I can create at once?
              </summary>

              <span class="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                How can I communicate with you?
              </summary>

              <span class="px-4 py-2">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
