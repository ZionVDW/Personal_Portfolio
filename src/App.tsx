import './styles/App.css';
import Layout from './components/Layout';
import cv from './assets/CV_Zion_Van_der_Wee.pdf';

export default function App() {
  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        <div className=" flex justify-center font-[700] mb-12">
          <h1 className="text-5xl">About Me</h1>
        </div>
        <div className="flex flex-col space-y-6 py-8">
          <p>
            Hallo, ik ben Zion Van der Wee, een gedreven Developer en UI Designer met een scherp oog voor front-end ontwikkeling en het creëren van uitstekende gebruikersinterfaces. Met een Bachelor in Toegepaste Informatica en Digital Experience
            Design ben ik goed onderlegd in het ontwerpen van intuïtieve en boeiende digitale ervaringen. Mijn technische vaardigheden en creatieve inzicht stellen me in staat om visueel aantrekkelijke en gebruiksvriendelijke applicaties te bouwen.
            Ik streef ernaar om de perfecte balans te vinden tussen esthetiek en functionaliteit, en ik ben altijd op zoek naar nieuwe manieren om de gebruikerservaring te verbeteren.
          </p>
          <p>
            Naast mijn professionele passie, vind ik ontspanning in het spelen van games en het kijken van films en series. Deze hobby's inspireren me en helpen me om op de hoogte te blijven van de nieuwste trends en innovaties in de digitale wereld.
            Ze verrijken mijn creatieve denkproces en geven me nieuwe ideeën die ik kan toepassen in mijn werk. Door mijn veelzijdige interesses en toewijding aan zowel technologie als design, ben ik in staat om unieke en effectieve oplossingen te
            creëren die voldoen aan de behoeften van gebruikers en opdrachtgevers.
          </p>
        </div>
        <div className="flex space-x-4 justify-center py-4">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold pb-4">Diploma&apos;s</h2>
            <ul className="list-none list-inside">
              <li>Bachelor Toegepaste Informatica</li>
              <li className="pb-12 pl-6">Thomas More Geel</li>
              <li>Bachelor Digital Experience Design</li>
              <li className="pl-6">Thomas More Mechelen</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold pb-4">Werkervaring</h2>
            <ul className="list-none list-inside">
              <li>StageFull Stack Developer </li>
              <li className="pl-6">LHS Global</li>
            </ul>
          </div>
        </div>
        <div className="pt-12">
          <a href={cv} download>
            <button className="bg-[#1D231E] hover:bg-[#FAFAEA] hover:text-black text-white font-bold py-2 px-4 rounded">Download CV</button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
