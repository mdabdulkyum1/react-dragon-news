import swimming from '../../assets/qZone1.png'
import ClassImg from '../../assets/qZone2.png'
import playGImg from '../../assets/qZone3.png'

function QZone() {
  return (
    <div>
    
      <h2 className="text-3xl font-semibold mb-6">Q Zone</h2>


    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6 py-2">
      <img src={swimming} alt={''} className="w-full h-48 object-cover" />
    </div>
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6 py-2">
      <img src={ClassImg} alt={''} className="w-full h-48 object-cover" />
    </div>
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6 py-2">
      <img src={playGImg} alt={''} className="w-full h-48 object-cover" />
    </div>

    </div>
  )
}

export default QZone