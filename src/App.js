import { useState } from "react";
import "./App.css";

function App() {
  function Header(props) {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode();
            }}
          >
            React
          </a>
        </h1>
      </header>
    );
  }
  function Nav(props) {
    const lis = [];
    /*for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(<li>{t.title}</li>);
    }*/
    props.topics.forEach((element) => {
      lis.push(
        <li key={element.id}>
          <a
            id={element.id}
            href={"/read" + element.id}
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }}
          >
            {element.title}
          </a>
        </li>
      );
    });
    return (
      <nav>
        <ol>{lis}</ol>
      </nav>
    );
  }
  function Article(props) {
    return (
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    );
  }

  function Create(props) {
    return (
      <article>
        <h2>Create</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="body" placeholder="body"></textarea>
          </p>
          <p>
            <input type="submit" value="Create"></input>
          </p>
        </form>
      </article>
    );
  }

  function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
      <article>
        <h2>Update</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onUpdate(title, body);
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
          </p>
          <p>
            <textarea
              name="body"
              placeholder="body"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="Update"></input>
          </p>
        </form>
      </article>
    );
  }

  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ]);
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextControl = null;

  if (mode === "Welcome") {
    content = <Article title="Welcome" body="hello, web" />;
  } else if (mode === "Read") {
    let title,
      body = null;
    topics.forEach((element) => {
      if (element.id === id) {
        title = element.title;
        body = element.body;
      }
    });
    content = <Article title={title} body={body} />;
    contextControl = (
      <li>
        <a
          href={"/update/" + id}
          onClick={(event) => {
            event.preventDefault();
            setMode("UPDATE");
          }}
        >
          Update
        </a>
      </li>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title: title, body: body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("Read");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    topics.forEach((element) => {
      if (element.id === id) {
        title = element.title;
        body = element.body;
        content = (
          <Update
            title={title}
            body={body}
            onUpdate={(title, body) => {
              const newTopics = [...topics];
              const updatedTipic = { id: id, title: title, body: body };
              newTopics.forEach((element) => {
                if (element.id === id) {
                  element = updatedTipic;
                  
                }
              });
              setTopics(newTopics);setMode('Read')
            }}
          ></Update>
        );
      }
    });

    return (
      <div className="App">
        <Header
          onChangeMode={() => {
            setMode("Welcome");
          }}
        />
        <Nav
          topics={topics}
          onChangeMode={(_id) => {
            setMode("Read");
            setId(_id);
          }}
        />
        {content}
        <ul>
          <li>
            <a
              href="/create"
              onClick={(event) => {
                event.preventDefault();
                setMode("CREATE");
              }}
            >
              Create
            </a>
          </li>
          {contextControl}
        </ul>
      </div>
    );
  }
}

export default App;
