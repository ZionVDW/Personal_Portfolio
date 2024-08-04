import './styles/App.css';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        <div className=" flex justify-center font-[700] mb-12">
          <h1 className="text-5xl">About Me</h1>
        </div>
        <div className="flex flex-col space-y-6 py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <a href="/path/to/your/cv.pdf" download>
            <button className="bg-[#1D231E] hover:bg-[#FAFAEA] hover:text-black text-white font-bold py-2 px-4 rounded">Download CV</button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
