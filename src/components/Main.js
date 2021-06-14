import React, { useState } from "react";
import Form from "./Form.js";
import Card from "./Card.js";

function Main() {
  const [palette, setPalette] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const updateAvatar = (image) => {
    setImage(image);
  };

  return (
    <>
      <main className="main">
        <Card
          name={name}
          job={job}
          image={image}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
        />
        <Form
          palette={palette}
          onChangePalette={(ev) => setPalette(ev.target.value)}
          name={name}
          onChangeName={(ev) => setName(ev.currentTarget.value)}
          job={job}
          onChangeJob={(ev) => setJob(ev.currentTarget.value)}
          image={image}
          updateAvatar={updateAvatar}
          email={email}
          onChangeEmail={(ev) => setEmail(ev.currentTarget.value)}
          phone={phone}
          onChangePhone={(ev) => setPhone(ev.currentTarget.value)}
          linkedin={linkedin}
          onChangeLinkedin={(ev) => setLinkedin(ev.currentTarget.value)}
          github={github}
          onChangeGithub={(ev) => setGithub(ev.currentTarget.value)}
        />
      </main>
    </>
  );
}

export default Main;
