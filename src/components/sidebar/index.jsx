import { Container } from "./style";
import img from ".././../images/pxfuel.jpg";
import { FaInstagram, FaGithub, FaLinkedinIn, FaRegUser } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { GrDocument } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import imgPerfil from "../../images/1652296717743.jpg";

import { useEffect, useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <div className={`sidebar ${open ? "" : "hiddenBurguer"}`}>
        <div className="hamburguer" onClick={() => setOpen(!open)}>
          <RxHamburgerMenu />
        </div>
        <div className="h-full overflow-auto">
          <div className="perfil">
            <img src={imgPerfil} />
            <h1 className="name">Mauricio Gomarim</h1>
            <div className="icons">
              <a
                href="https://www.instagram.com/mauri.bmkk/"
                target="_blank"
                className="icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/MauricioGomarim"
                target="_blank"
                className="icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mauricio-gomarim-029b83236/"
                target="_blank"
                className="icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#home">
                  <HiOutlineHome /> Home
                </a>
              </li>
              <li>
                <a href="#sobre">
                <FaRegUser /> Sobre mim
                </a>
             
              </li>
              <li>
                <a href="#skill">
                <GrDocument /> Formações</a>
              </li>
              <li>
                <a href="#projetos">
                <FaLaptopCode /> Projetos realizados</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
