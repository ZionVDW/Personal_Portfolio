import Layout from './components/Layout';
import ListItem from './components/ListItem';

const Skills = () => {
  const Languages = [
    { name: 'Nederlands', percentage: 60 },
    { name: 'Engels', percentage: 80 },
    { name: 'Frans', percentage: 50 },
  ];
  const Development = [
    { name: 'HTML', percentage: 60 },
    { name: 'CSS', percentage: 80 },
    { name: 'Javascript', percentage: 50 },
    { name: 'React', percentage: 60 },
    { name: 'Next.js', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 50 },
    { name: 'Node.js', percentage: 60 },
    { name: 'Express', percentage: 80 },
    { name: 'MongoDB', percentage: 50 },
  ];
  const Design = [
    { name: 'Adobe XD', percentage: 60 },
    { name: 'Figma', percentage: 80 },
    { name: 'Photoshop', percentage: 50 },
    { name: 'Illustrator', percentage: 60 },
    { name: 'After Effects', percentage: 80 },
  ];
  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        <div className=" flex justify-center font-[700] mb-12">
          <h1 className="text-5xl">Vaardigheden</h1>
        </div>
        <div className="flex space-x-4 justify-center py-4">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold pb-4 text-center">Design</h2>
            <div className="mx-8">
              <ul className="list-none list-inside">
                {Design.map((language, index) => (
                  <ListItem key={index} name={language.name} percentage={language.percentage} />
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold pb-4 text-center">Talen</h2>
            <div className="mx-8">
              <ul className="list-none list-inside">
                {Languages.map((language, index) => (
                  <ListItem key={index} name={language.name} percentage={language.percentage} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold pb-4 text-center">Development</h2>
            <div className="mx-8">
              <ul className="list-none list-inside">
                {Development.map((language, index) => (
                  <ListItem key={index} name={language.name} percentage={language.percentage} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
