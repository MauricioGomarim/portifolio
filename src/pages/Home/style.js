import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  .sidebar {
    position: fixed;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    height: 100vh;
    max-width: 300px;
    color: #fff;
    .perfil {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .icons {
        margin-top: 15px;
        display: flex;
        gap: 10px;
        .icon {
          background-color: #2c2f3f;
          padding: 5px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      img {
        margin-top: 15px;
        max-width: 130px;
        border-radius: 50%;
        border: 8px solid #2c2f3f;
      }

      h1 {
        margin-top: 15px;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
      }
    }

    .links {
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          margin-top: 10px;
          text-decoration: none;
          list-style: none;
          font-family: "Poppins", sans-serif;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 40px;
          background-color: transparent;
          transition: all 0.5s ease-in-out;
          cursor: pointer;

          &:hover {
            background-color: #2c2f3f25;
          }

          svg {
            font-size: 28px;
          }
        }
      }
    }
  }

  .banner {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    height: 100vh;
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    .content {
      padding: 0 10%;
      h1 {
        position: relative;
        z-index: 10;
        font-size: 50px;
        font-family: "Poppins", sans-serif;

        @media (max-width: 480px) {
          font-size: 30px;
        }
      }
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0.5;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 100vw 0 0 100vw;
    }

    .escrita-animada {
      position: relative;
      color: #fff;
      z-index: 50000;

      @media (max-width: 480px) {
        font-size: 20px !important;
      }
    }
    h1 {
      color: #fff;
    }
  }

  .sobre {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    padding: 15% 10% 5% 10%;
    background: linear-gradient(
      180deg,
      rgba(4, 11, 20, 1) 5%,
      rgba(255, 255, 255, 1) 20%
    );

    @media (max-width: 480px) {
      background: linear-gradient(
        180deg,
        rgba(4, 11, 20, 1) 5%,
        rgba(255, 255, 255, 1) 10%
      );
    }

    .title {
      h1 {
        font-size: 32px;
        font-family: "Poppins", sans-serif;
      }
    }

    .text {
      margin-top: 20px;
      margin-bottom: 50px;
    }

    .cards .card {
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE_200};
      padding: 10px;
      border-radius: 10px;
    }
  }

  .divider {
        width: 150px;
        height: 2px;
        background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      }

  .skills {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 5% 10% 5% 10%;

    h1 {
      font-size: 32px;
    }

    .timeline {
      margin-top: 20px;
      display: flex;
      .line-back {
        width: 3px;
        background-color: #0000001f;
      }

      .formacoes {
        padding-left: 40px;
        position: relative;

        .line {
          width: 3px;
          background-color: ${({ theme }) => theme.COLORS.BLUE_200};;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -3px;
          max-height: 300px;

        }

        .formacao {
          margin-bottom: 20px;
          position: relative;
          
          .circle {
            background-color: white;
            border: 2px solid ${({ theme }) => theme.COLORS.BLUE_200};;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            left: -51.9px;
            
          }

          h2 {
            font-size: 20px;
            text-transform: uppercase;
          }

          ul li {
            font-size: 15px;
            font-weight: 400;
            list-style: circle;
            margin-left: 20px;
          }
        }
      }
    }
  }

  .projetos {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 3% 10% 5% 10%;

    h1 {
      font-size: 32px;
    }

    .categorias {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 20px;
      button {
        text-transform: uppercase;
        padding: 5px 15px;
        border-radius: 15px;
        transition: all 0.5s ease;
        &:hover {
          background-color: ${({ theme }) => theme.COLORS.BLUE_200};
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
    }

  }

  @media (max-width: 980px) {
    grid-template-columns: auto !important;
  }
`;
