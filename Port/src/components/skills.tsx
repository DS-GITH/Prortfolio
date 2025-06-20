import '../App.css';

const skillsData = [
  { name: "Front-End", percent: 85 },
  { name: "Back-End", percent: 65 },
  { name: "Design", percent: 75 },
  { name: "Marketing", percent: 70 },
  { name: "Inglês", percent: 90 },
];

interface SkillProps {
  name: string;
  percent: number;
}

interface SectProps {
  title: any;
  children: any;
}



function SkillBar({ name, percent}: SkillProps ) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-gray-800">{name}</span>
        <span className="text-sm text-gray-600">{percent}%</span>
      </div>
      <div className="w-full bg-white h-3 rounded shadow-inner">
        <div
          className="h-full bg-blue-700 rounded transition-all duration-700 ease-in-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Section({ title, children }: SectProps) {
  return (
    <section className="mb-12">
      <h2 className="text-blue-700 text-2xl font-extrabold mb-6 border-l-4 border-blue-700 pl-4">{title}</h2>
      {children}
    </section>
  );
}

function Skills() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 px-6 py-10 md:px-20 text-gray-900">
      <div className="w-full max-w-4xl">

        <Section title="Escolaridade">
          <div className="ml-4">
            <h3 className="font-bold text-lg">● EEEP Comendador Miguel Gurgel</h3>
            <p className="text-sm text-gray-700">2022 – 2025 (previsão)</p>
            <p className="text-sm text-gray-700">
              Ensino Médio integrado ao curso técnico de Desenvolvimento de Sistemas, com foco em programação, banco de dados e design de interfaces.
            </p>
          </div>
        </Section>

        <Section title="Cursos Complementares">
          <div className="ml-4 space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-bold">● AWS Academy Cloud Foundation</h3>
              <p>20h – Presencial<br />Curso introdutório sobre computação em nuvem com foco em serviços AWS e fundamentos de infraestrutura.</p>
            </div>
            <div>
              <h3 className="font-bold">● Data Analytics And Cybersecurity - Google</h3>
              <p>105h – Online<br />Conceitos essenciais de análise de dados e segurança cibernética, incluindo boas práticas e ferramentas do mercado.</p>
            </div>
            <div>
              <h3 className="font-bold">● 5G Network And Applications - Huawei</h3>
              <p>20h – Online<br />Estudo sobre redes móveis de quinta geração e suas aplicações em ambientes de desenvolvimento e conectividade.</p>
            </div>
            <div>
              <h3 className="font-bold">● Web Design Com Vue.js – Udemy</h3>
              <p>30h – Online<br />Curso completo sobre criação de interfaces web utilizando o framework Vue.js com foco em responsividade e design moderno.</p>
            </div>
          </div>
        </Section>

        <Section title="Atividades Complementares">
          <div className="ml-4 space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-bold">● Identidade Visual – Projeto Wave</h3>
              <p>2023 – Presente<br />Criação de artes digitais, logotipos, personagens e elementos gráficos para identidade visual da marca Wave.</p>
            </div>
            <div>
              <h3 className="font-bold">● Game Design</h3>
              <p>2022 – Presente<br />Desenvolvimento de projetos independentes com foco em FPS, level design e arte em pixel.</p>
            </div>
          </div>
        </Section>

        <Section title="My Skills">
          <div className="space-y-5">
            {skillsData.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}

export default Skills;
