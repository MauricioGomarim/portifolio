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

import advocacia from "../../images/advocaciakamille.png";
import alphainstitucional from "../../images/alpha-institucional.png";
import alpha from "../../images/alpha.png";
import kongpay from "../../images/kongpay.png";
import lojacaminhoseguro from "../../images/lojacaminhoseguro.png";
import papelaria from "../../images/papelaria.png";
import revvero from "../../images/revvero.png";
import secapower from "../../images/secapower.png";
import dwbordados from "../../images/dwbordados.png";
import numclic from "../../images/numclic.png";

export function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [sitesState, setSites] = useState(1);
  const [sistemasState, setSistemas] = useState(1);
  const [todosState, setTodos] = useState(1);

  function handleSite() {
    setSistemas(0);

    setSites(1);
  }

  function handleSistemas() {
    setSites(0);
    setSistemas(1);
  }

  function handleTodos() {
    setSistemas(1);
    setSites(1);
  }

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
              Iniciei minha carreira na área de tecnologia em 2022, motivado
              pelo interesse no desenvolvimento de sites. Desde então, mergulhei
              nos estudos e me dediquei intensamente, o que me permitiu
              conquistar minha primeira vaga como desenvolvedor em apenas seis
              meses. Desde esse marco, mantenho um aprendizado constante e busco
              novos desafios que me permitam crescer pessoal e
              profissionalmente.
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
                  <p>
                    ReactJS, TailwindCSS, Styled Components, jQuery, Wordpress
                  </p>
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

          <div className="categorias">
            <button onClick={(handleTodos)}  className={sitesState && sistemasState ? 'active' : ''} >Todos</button>
            <button onClick={(handleSite)} className={sitesState ? 'active' : ''}>Sites</button>
            <button onClick={(handleSistemas)} className={sistemasState ? 'active' : ''}>Sistemas</button>
          </div>

          <div className="projetos-cards">
            <Projeto
              link="https://numclicbr.com"
              imagem={numclic}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://rockeatnotes.netlify.app"
              imagem={imgRockeatNotes}
              className={sistemasState ? "" : "disabled"}
            />
            <Projeto
              link="https://foodexplorer-loja.netlify.app"
              imagem={imgFoodExplorer}
              className={sistemasState ? "" : "disabled"}
            />
            <Projeto
              link="https://sistema-jeff.netlify.app"
              imagem={imgEstoque}
              className={sistemasState ? "" : "disabled"}
            />
            <Projeto
              link="https://advocaciakamillebarros.com.br"
              imagem={advocacia}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://alphaempreendedorismo.com.br/home-institucional/"
              imagem={alphainstitucional}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://alphaempreendedorismo.com.br"
              imagem={alpha}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://kongpay.com.br"
              imagem={kongpay}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://lojacaminhoseguro.com"
              imagem={lojacaminhoseguro}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://papelariamundole.com.br"
              imagem={papelaria}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://revveromais.com.br"
              imagem={revvero}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://kongpay.com.br/secapower"
              imagem={secapower}
              className={sitesState ? "" : "disabled"}
            />
            <Projeto
              link="https://dwbordados.com.br/home/"
              imagem={dwbordados}
              className={sitesState ? "" : "disabled"}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
