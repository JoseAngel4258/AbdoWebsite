import  '../styles/plansCardHeizahn.css'

const PlansCardHeizahn = () => {
  return (
    <div id="service" className="h-[100vh] w-screen md:snap-center flex justify-center items-center bg-gray-800">
      <div className="contenedor">
        <div className="box one" dataText='plan1'></div>
        <div className="box two" dataText='plan2'></div>
        <div className="box three" dataText='plan3'></div>
        <div className="box four" dataText='plan4'>xdf</div>
      </div>
    </div>
  );
};

export default PlansCardHeizahn;
