import CardUI from './components/CardUI';
import './index.css';

import quickResponseImage from '../src/assets/imagefeature.png'
import quickResponseImage2 from '../src/assets/imagefeature2.png'
import activeImage from '../src/assets/activeImg.png'
import pauseImage from '../src/assets/pauseImg.png'
import playImage from '../src/assets/play.png'
import stopImage from '../src/assets/stop.png'
import AssetsDirectory from './components/AssetsDirectory';


const Data =[
  {feature : quickResponseImage , cta :"You are online", status : activeImage , btnImg :stopImage , time:"05:20 hours" },
  {feature : quickResponseImage2 , cta :"Shift Paused",  status : pauseImage , btnImg : playImage , time:"05:20 hours" },


]






function App() {
  return (

   <div className='flex md:flex-row flex-col items-center justify-center gap-10 py-10 bg-gray-300 w-full
    min-h-screen'>

    {/* {Data.map((item, index) => ( // Use .map() to iterate over Data
          <CardUI key={index} feature={item.feature} cta={item.cta} status={item.status} btnImg={item.btnImg} time={item.time} />
        ))} */}
   <AssetsDirectory />
   </div>
  );
}

export default App;
