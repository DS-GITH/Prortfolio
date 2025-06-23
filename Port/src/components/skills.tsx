import { FaGear } from "react-icons/fa6";

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
  title: string;
  children: React.ReactNode;
}

function SkillBar({ name, percent }: SkillProps) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-gray-800">{name}</span>
        <span className="text-sm text-gray-600">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Section({ title, children }: SectProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative pl-4 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-gradient-to-b from-blue-600 to-purple-600 before:rounded-full">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Skills() {
  return (
    <div id="skills" className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8">
      <FaGear color="blue" size={150} className="lg:right-40 lg:top-195 lg:absolute sm:"/>
      <div className="max-w-4xl mx-auto">
        <Section title="Escolaridade">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-gray-800 mb-1">● EEEP Comendador Miguel Gurgel</h3>
            <p className="text-sm text-gray-600 mb-2">2022 – 2025 (previsão)</p>
            <p className="text-gray-700">
              Ensino Médio integrado ao curso técnico de Desenvolvimento de Sistemas, com foco em programação, banco de dados e design de interfaces.
            </p>
          </div>
        </Section>

        <Section title="Cursos Complementares">
          <div className="space-y-4">
            {[
              {
                title: "AWS Academy Cloud Foundation",
                desc: "20h – Presencial\nCurso introdutório sobre computação em nuvem com foco em serviços AWS e fundamentos de infraestrutura."
              },
              {
                title: "Data Analytics And Cybersecurity - Google",
                desc: "105h – Online\nConceitos essenciais de análise de dados e segurança cibernética, incluindo boas práticas e ferramentas do mercado."
              },
              {
                title: "5G Network And Applications - Huawei",
                desc: "20h – Online\nEstudo sobre redes móveis de quinta geração e suas aplicações em ambientes de desenvolvimento e conectividade."
              },
              {
                title: "Web Design Com Vue.js – Udemy",
                desc: "30h – Online\nCurso completo sobre criação de interfaces web utilizando o framework Vue.js com foco em responsividade e design moderno."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-800 mb-1">● {item.title}</h3>
                <p className="text-gray-700 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Atividades Complementares">
          <div className="space-y-4">
            {[
              {
                title: "Identidade Visual – Projeto Wave",
                desc: "2023 – Presente\nCriação de artes digitais, logotipos, personagens e elementos gráficos para identidade visual da marca Wave."
              },
              {
                title: "Game Design",
                desc: "2022 – Presente\nDesenvolvimento de projetos independentes com foco em FPS, level design e arte em pixel."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-800 mb-1">● {item.title}</h3>
                <p className="text-gray-700 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="My Skills">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
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