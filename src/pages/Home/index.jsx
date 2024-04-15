import { useState, useEffect } from "react";
import { Container } from "./style";
import { Sidebar } from "../../components/sidebar";
import imgBG from "../../images/192.jpg";
import { TypeAnimation } from "react-type-animation";
import img from ".././../images/pxfuel.jpg";
import { Button } from "../../components/button";
import { Projeto } from "../../components/projeto";
import imgRockeatNotes from "../../images/rockeat-notes.png";
import imgFoodExplorer from "../../images/foodexplorer.png";
import imgEstoque from "../../images/sistema-estoque.png";
import imgPerfil from "../../images/1652296717743.jpg";




export function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const skillsSection = document.querySelector(".skills");
      const skillsSectionTop = skillsSection.offsetTop;
      const skillsSectionHeight = skillsSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;

      // Calcula a porcentagem vertical
      const percentage =
        ((scrolled - skillsSectionTop + windowHeight) / skillsSectionHeight) *
        80;
      setScrollPercentage(percentage);
    }

    const skillsSection = document.querySelector(".skills");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      });
    });

    observer.observe(skillsSection);

    return () => {
      observer.unobserve(skillsSection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Sidebar />
      <div className="hero">
        <section className="banner" id="home">
          <div className="content">
            <h1>Mauricio Gomarim</h1>
            <TypeAnimation
              className="escrita-animada"
              sequence={[
                "Desenvolvedor Back-end",
                1000,
                "Desenvolvedor Front-end",
                1000,
                "Desenvolvedor Full-stack",
                1000,
              ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <img src={imgBG} />
        </section>

        <section className="!pt-48 sm:!pt-40 sobre" id="sobre">
          <div className="title">
            <h1 className="text-center sm:text-start">Sobre mim</h1>
            <div className="divider mx-auto my-0 sm:mr-auto sm:ml-0"></div>
          </div>
          <div className="text">
            <p className="text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              nostrum molestias cupiditate nisi et deleniti totam ex vero optio,
              quia adipisci sapiente perferendis animi officia minus. Et ratione
              ducimus iure!
            </p>
          </div>

          <div className="flex flex-col md:flex-row mt-6 items-center">
            <div className="w-full md:w-1/3">
              <img src={imgPerfil} className="imgPerfil rounded-lg" />
            </div>
            <div className="w-full md:w-2/3 p-4">
              <div className="title">
                <h1 className="text-center sm:text-start !text-2xl">
                  Minhas Skills
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row mt-6 gap-5 cards">
                <div className="w-full sm:w-1/2ull sm:w-1/2 card">
                  <h1 className="text-2xl">Front-end</h1>
                  <p>ReactJS, TailwindCSS, Styled Components, jQuery</p>
                  <Button className="!mt-auto" title="Ver projetos" />
                </div>
                <div className="w-full sm:w-1/2 card flex-col flex">
                  <h1 className="text-2xl">Back-end</h1>
                  <p>NodeJS, Knex, PostgreSQL, AWS, PHP </p>
                  <Button className="!mt-auto" title="Ver projetos" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skill">
          <h1>Experiência e Formações</h1>
          <div className="divider mx-auto my-0 sm:mr-auto sm:ml-0"></div>
          <div className="timeline">
            <div className="line-back"></div>
            <div className="formacoes">
              <div
                className="line"
                style={{ height: `${scrollPercentage}%` }}
              ></div>
              <div className="formacao">
                <div className="circle"></div>
                <h2>Técnico em Informática</h2>
                <ul>
                  <li>
                    Desenvolvimento de sistemas com C# e manutenção de
                    computadores
                  </li>
                </ul>
              </div>
              <div className="formacao">
                <div className="circle"></div>
                <h2>NodeJS, ReactJS, Styled Components</h2>
                <ul>
                  <li>Rocketseat - Explorer</li>
                </ul>
              </div>

              <div className="formacao">
                <div className="circle"></div>
                <h2>PHP, jQuery, Bootstrap</h2>
                <ul>
                  <li>Udemy</li>
                </ul>
              </div>

              <div className="formacao">
                <div className="circle"></div>
                <h2>Git, Github, AWS S3</h2>
                <ul>
                  <li>Rockeatseat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="projetos" id="projetos">
          <h1>Projetos realizados</h1>
          <div className="divider mx-auto my-0 sm:mr-auto sm:ml-0"></div>

          {/* <div className="categorias">
            <button>Todos</button>
            <button>Sites</button>
            <button>Sistemas</button>
          </div> */}

          <div className="projetos-cards">
            <Projeto
              link="https://rockeatnotes.netlify.app"
              imagem={imgRockeatNotes}
            />
            <Projeto
              link="https://foodexplorer-loja.netlify.app"
              imagem={imgFoodExplorer}
            />
            <Projeto
              link="https://sistema-jeff.netlify.app"
              imagem={imgEstoque}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
