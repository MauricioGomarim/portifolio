import styled from "styled-components";

export const Container = styled.div`
    z-index: 500000;
    position: relative;

  .hamburguer {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    width: fit-content;
    width: 60px;
    height: 60px;
    font-size: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;


    position: absolute;
    right: -80px;
    cursor: pointer;
  }
  .sidebar {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    height: 100vh;
    width: 300px;
    color: #fff;
    transition: all 0.5s ease;

    .perfil {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .icons {
        margin-top: 15px;
        display: flex;
        gap: 10px;

        a {
          color: #fff;
        }

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
          a {
            display: flex;
            align-items: center;
            gap: 10px;
          }

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

  .hiddenBurguer {
    left: -300px;
  }

  @media (min-width: 980px) {
    .hamburguer {
      display: none;
    }
  }
`;
