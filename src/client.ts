import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://foiklouizarfjwikmtyi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvaWtsb3VpemFyZmp3aWttdHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTEzNzIsImV4cCI6MjAzODM2NzM3Mn0.swmlOg0cVFKbh03n376rmmoDBgtly8t4MyjtZSgOf_c'
);
