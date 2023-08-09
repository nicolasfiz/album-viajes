import DiaPlan from "../components/DiaPlan";
import planViajeLisboa from "../mocks/planViajeLisboa";

function Lisboa() {
    return (
      <>
        <h1 className="font-bold text-4xl"> Plan de viaje Lisboa 🗺</h1>
        {planViajeLisboa.map(diaPlan => (
          <DiaPlan key={diaPlan.dia} {...diaPlan} />
        ))}
      </>
    );
  }

export default Lisboa
