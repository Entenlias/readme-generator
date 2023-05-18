import "./App.css";
import { Container, Row, Col } from "react-grid-system";
import { marked } from "marked";
import { useMemo, useState } from "react";
import TextInput from "./components/TextInput";
import TextAreaInput from "./components/TextAreaInput";
import FloatingActionButton from "./components/FloatingActionButton";
import TagList from "./components/TagList";


export default function App() {
  const [title, setTitle] = useState("My awesome project!");
  const [description, setDescription] = useState("My awesome project is an awesome project that is so awesome, because it is awesome. Dont ya think thats awesome?");

  const markdown = useMemo(() => {
    return `
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
        
# ${title}
    

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
`;
  }, [title])

  return (
    <>
    <FloatingActionButton onClick={() => { return false;}} />
      <Container
        style={{
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
          maxWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Row nogutter={true} style={{ minHeight: "100vh" }}>
          <Col sm={6} className="form">
            <div className="introduction">
              <h1>README.md Generator</h1>
              <p>How does it work?</p>
              <ol>
                <li>Enter your projects details.</li>
                <li>Create sections and fill them with content</li>
                <li>
                  Copy the final code into your <code>README.md</code> file
                </li>
              </ol>
            </div>
            <div className="actual-form">
              <TextInput name="Project title" description="The title/name of your project, e.g. 'Example Project'" value={title} onChange={e => setTitle(e.target.value)} />
              <TextAreaInput rows={5} name="Project description" description="Describe your project, like its technical requirements, its functionalities, etc." value={description} onChange={e => setDescription(e.target.value)} />
              <TagList />
            </div>
          </Col>
          <Col
            sm={6}
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></Col>
        </Row>
      </Container>
    </>
  );
}
