import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';
import Layout from './components/Layout';
import { supabase } from './client';
import { useEffect, useState } from 'react';

interface Projects {
  id: string;
  title: string;
  description: string;
  imagename1: string;
  imagename2: string;
  imagename3: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase.from('Projects').select();
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data || []);
    }
  }

  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        <div className="flex justify-center font-[700] mb-12">
          <h1 className="text-5xl">Projecten</h1>
        </div>
        <div className="flex flex-col space-y-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="bg-[#1D231E] p-6 rounded-lg flex flex-row justify-between">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <CaretRight size={36} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
