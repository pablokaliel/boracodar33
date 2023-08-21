import React, { useState, useRef } from "react";

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

  const [userNotFound, setUserNotFound] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);

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

    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          setUserNotFound(true);
          setTicketGenerated(false);
          throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
        setUserNotFound(false);
        setTicketGenerated(true);
        return response.json();
      })
      .then((data) => {
        if (data.avatar_url) {
          setAvatarUrl(data.avatar_url);
        }
        if (data.name) {
          setRealName(data.name);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário do GitHub:", error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

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
              <span>Digite seu usuário do GitHub</span>
            )}
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
            {userNotFound && (
              <p className="error">Usuário inválido. Verifique e tente novamente.</p>
            )}
            <button onClick={fetchGitHubProfile}>
              <Ticket size={20} color="#fff" /> gerar meu ticket{" "}
            </button>
            {ticketGenerated && (
              <button className="download" onClick={handleDownloadClick}>
                {" "}
                <Download size={20} color="#fff" /> fazer download{" "}
              </button>
            )}
          </DivInfoGitHub>
        </DivTicket>

        <DivResult ref={divResultRef}>
          <DivLogo>
            <img src={bgcardticket}/>
          </DivLogo>

          <DivUser>
            <User>
              <div className="logoperfil">
                <img src={avatarUrl || avatar} alt="Perfil" />
              </div>
              <span>tripulante</span>
              <h1>{realName || "seu nome aqui"}</h1>
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
      </Swapper>
    </Container>
  );
}

export default Home;
