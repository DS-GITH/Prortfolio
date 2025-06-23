// Primeiro importe todas as imagens que serão usadas
import pizzariaImg from '../assets/Perfil.png';


export type ProjectType = 'all' | 'works' | 'personal' | 'others';

export interface Project {
  id: number;
  title: string;
  category: ProjectType;
  img: string; // Agora receberá a referência da imagem importada
  description: string;
}

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Site para pizzaria', 
    category: 'works',
    img: pizzariaImg, 
    description: 'Projeto para um cliente local' 
  },
];