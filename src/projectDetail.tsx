import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { supabase } from './client';

interface Project {
  id: string;
  title: string;
  description: string;
  imagename1: string;
  imagename2: string;
  imagename3: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProject();
  });

  async function fetchProject() {
    const { data, error } = await supabase.from('Projects').select().eq('id', id).single();
    if (error) {
      console.error('Error fetching project:', error);
    } else {
      setProject(data);
    }
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        <h1 className="text-5xl mb-8">{project.title}</h1>
        <p className="text-lg">{project.description}</p>
        <div className="mt-8 space-y-4"></div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
