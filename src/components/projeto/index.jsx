import { Container } from "./style";

export function Projeto({link, imagem, ...rest}) {
  return (
    <Container {...rest}>
      <a href={link} target="blank">
        <img src={imagem} alt="" />
      </a>
    </Container>
  );
}
