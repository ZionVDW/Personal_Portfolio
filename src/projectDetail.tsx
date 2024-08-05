/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { supabase } from './client';

import beewary1 from './assets/beewary1.png';
import beewary2 from './assets/beewary2.png';
import beewary3 from './assets/beewary3.png';

import hoppin1 from './assets/hoppin1.png';
import hoppin2 from './assets/hoppin2.png';
import hoppin3 from './assets/hoppin3.png';

import spotify1 from './assets/spotify1.png';
import spotify2 from './assets/spotify2.png';
import spotify3 from './assets/spotify3.png';

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
      <div className="pt-36 px-24 text-[#FAFAEA]">
        {loading && !project ? (
          <div></div>
        ) : error ? (
          <div>{error}</div>
        ) : project ? (
          <>
            <div className="flex justify-center font-[700] mb-12">
              <h1 className="text-5xl mb-8">{project.title}</h1>
            </div>
            <p className="text-lg mb-6">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <img src={project.imagename1 === 'beewary1' ? beewary1 : project.imagename1 === 'hoppin1' ? hoppin1 : spotify1} alt="project1" className="w-64 h-full object-cover" />
              <img src={project.imagename2 === 'beewary2' ? beewary2 : project.imagename2 === 'hoppin2' ? hoppin2 : spotify2} alt="project2" className="w-64 h-full object-cover" />
              <img src={project.imagename3 === 'beewary3' ? beewary3 : project.imagename3 === 'hoppin3' ? hoppin3 : spotify3} alt="project3" className="w-64 h-full object-cover" />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
