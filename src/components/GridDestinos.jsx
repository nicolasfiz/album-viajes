import CardDestinos from './cardDestino'
import destinos from '../mocks/destinos'

function GridDestinos() {
  return (
    <div className="grid grid-cols-1 m-8 gap-6">
        {
            destinos.map((destino, index) => <CardDestinos key={index} destino={destino}/>)
        }
    </div>
  )
}

export default GridDestinos
