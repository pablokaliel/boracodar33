import React, { useState, useRef, useEffect } from "react";

import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

import { Container, Swapper, DivTicket, DivInfoGitHub, DivInput, DivResult, DivLogo, DivUser, User, DivLocation, Info, Response } from "./styles";

import avatar from "../../assets/img-avatar.png";

import { Download, GithubLogo, Ticket } from "@phosphor-icons/react";
import success from "../../assets/confirmado.svg";
import lines from "../../assets/lines.svg";

import bgcardticket from "../../assets/background-ticket.png";

function Home() {
  const divResultRef = useRef(null);

  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(avatar);
  const [realName, setRealName] = useState("");
  const [location, setLocation] = useState("");

  const [userNotFound, setUserNotFound] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);

  const [searchCompleted, setSearchCompleted] = useState(false);

  const handleDownloadClick = () => {
    if (divResultRef.current) {
      const image = new Image();

      image.onload = () => {
        html2canvas(divResultRef.current, {
          useCORS: true,
          scrollY: -window.scrollY,
        })
          .then((canvas) => {
            canvas.toBlob((blob) => {
              saveAs(blob, `${realName}-ticket`);
            });
          })
          .catch((error) => {
            console.error("Erro ao gerar imagem:", error);
          });
      };

      image.src = avatarUrl;
    }
  };

  const fetchGitHubProfile = () => {
    if (username.trim() === "") {
      console.log("Nome de usuário vazio");
      return;
    }

    setUserNotFound(false);
    setTicketGenerated(false);
    setAvatarUrl(avatar);
    setRealName("");
    setLocation("");

    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          setUserNotFound(true);
          throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.avatar_url) {
          setAvatarUrl(data.avatar_url);
        }
        if (data.name) {
          setRealName(data.name);
        }
        if (data.location) {
          setLocation(data.location);
        }
        setTicketGenerated(true);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário do GitHub:", error);
      })
      .finally(() => {
        setSearchCompleted(true);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (ticketGenerated) {
      const timeoutId = setTimeout(() => {
        setSearchCompleted(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [ticketGenerated]);

  return (
    <Container>
      <Swapper>
        <DivTicket>
          <h1>Gere seu ticket e compartilhe com o mundo</h1>

          <DivInfoGitHub>
            {ticketGenerated ? (
              <div className="success">
                <img src={success} alt="" />
                <span>Ticket gerado com sucesso</span>
              </div>
            ) : (
              <>
                <span>Digite seu usuário do GitHub</span>
                <DivInput>
                  <div className="icon-container">
                    <GithubLogo size={20} color="#202024" />
                  </div>
                  <input
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={handleUsernameChange}
                  />
                </DivInput>
                <button onClick={fetchGitHubProfile}>
                  <Ticket size={20} color="#fff" /> gerar meu ticket
                </button>
              </>
            )}

            {userNotFound && searchCompleted && (
              <p className="error">
                Usuário não encontrado. Verifique e tente novamente.
              </p>
            )}

            {ticketGenerated && (
              <button className="download" onClick={handleDownloadClick}>
                <Download size={20} color="#fff" /> fazer download
              </button>
            )}

            {/* Botão para iniciar nova pesquisa */}
            {ticketGenerated && (
              <button
                onClick={() => {
                  setUserNotFound(false);
                  setTicketGenerated(false);
                  setSearchCompleted(false);
                }}
              >
                Nova Pesquisa
              </button>
            )}
          </DivInfoGitHub>
        </DivTicket>

        {ticketGenerated && !userNotFound && (
          <DivResult ref={divResultRef}>
            <DivLogo>
              <img src={bgcardticket} />
            </DivLogo>

            <DivUser>
              <User>
                <div className="logoperfil">
                  <img src={avatarUrl || avatar} alt="Perfil" />
                </div>
                <span>tripulante</span>
                <div className="info">
                  <h1>{realName || "seu nome aqui"}</h1>
                  <p>{location}</p>
                </div>
              </User>

              <DivLocation>
                <Info>
                  <h1>evento</h1>
                  <h1>data</h1>
                  <h1>hora</h1>
                </Info>

                <Response>
                  <h1>ia para devs</h1>
                  <h1>14 - 16 ago. 2023</h1>
                  <h1>ao vivo - 19h</h1>
                </Response>
              </DivLocation>

              <img src={lines} alt="" />
            </DivUser>
          </DivResult>
        )}
      </Swapper>
    </Container>
  );
}

export default Home;
