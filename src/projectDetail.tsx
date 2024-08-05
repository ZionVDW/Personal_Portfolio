/* eslint-disable react-hooks/exhaustive-deps */
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProject();
  }, [id]);

  async function fetchProject() {
    const { data, error } = await supabase.from('Projects').select().eq('id', id).single();
    if (error) {
      setError('Error fetching project');
      setProject(null);
    } else {
      setProject(data);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div className="py-36 px-24 text-[#FAFAEA]">
        {loading && !project ? (
          <div></div>
        ) : error ? (
          <div>{error}</div>
        ) : project ? (
          <>
            <div className="flex justify-center font-[700] mb-12">
              <h1 className="text-5xl mb-8">{project.title}</h1>
            </div>
            <p className="text-lg">{project.description}</p>
            <div className="mt-8 space-y-4"></div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
