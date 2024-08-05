import { GithubLogo, LinkedinLogo, MicrosoftOutlookLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import profilepic from '../assets/profilepic.png';

const Sidebar = () => {
  const currentpath = window.location.pathname;
  return (
    <div className="w-[366px] min-h-screen py-36 bg-[#1D231E] text-center rounded-r-[70px] place-content-center">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="pb-4">
            <img src={profilepic} className="rounded-[45px] mx-auto" alt="Zion Van der Wee" width={220} height={220} />
          </div>
          <h1 className="text-[#FAFAEA] text-3xl font-bold">Zion Van der Wee</h1>
          <p className="text-[#FAFAEA] text-base">UI/UX Designer - Developer</p>
        </div>
        <div>
          <ul className="text-[#FAFAEA] text-xl space-y-10">
            <li>
              <Link to="/" className={currentpath === '/' ? 'text-[#FAFAEA] font-bold underline underline-offset-8' : 'text-[#FAFAEA]'}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/skills" className={currentpath === '/skills' ? 'text-[#FAFAEA] font-bold underline underline-offset-8' : 'text-[#FAFAEA]'}>
                Vaardigheden
              </Link>
            </li>
            <li>
              <Link to="/projects" className={currentpath === '/projects' ? 'text-[#FAFAEA] font-bold underline underline-offset-8' : 'text-[#FAFAEA]'}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <a href="https://www.linkedin.com/in/zion-van-der-wee-6a302a1b8/" className="text-[#FAFAEA] hover:text-[#7E7E7E]">
            <LinkedinLogo size={42} />
          </a>
          <a href="https://github.com/ZionVDW" className="text-[#FAFAEA] hover:text-[#7E7E7E]">
            <GithubLogo size={42} />
          </a>
          <a href="mailto:zion.vanderwee@hotmail.com" className="text-[#FAFAEA] hover:text-[#7E7E7E]">
            <MicrosoftOutlookLogo size={42} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
