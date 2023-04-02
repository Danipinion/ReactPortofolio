import datas from "../data/datas.js";
import Card from "../components/portofolio/Card.jsx";

function Portofolio() {
  return (
    <div className="sm:p-5 pr-2 mb-20 sm:mb-0">
      <h1 className="text-white font-bold text-3xl mb-4 text-center">
        My Portofolio
      </h1>
      <div className="cards flex sm:gap-10 gap-5  justify-center flex-wrap h-[70vh] overflow-y-scroll">
        {datas.map((data) => (
          <Card
            image={data.image}
            text={data.text}
            link={data.link}
            tech={data.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
