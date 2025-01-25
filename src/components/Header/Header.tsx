import pairaLogo from "../../assets/paira.png";

export function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        height: "11vh",
        display: "grid", // Use CSS Grid for layout
        gridTemplateColumns: "1fr auto 1fr", // Create three columns
        alignItems: "center", // Vertically align content
        padding: "0 7.5vw", // Padding for responsiveness
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={pairaLogo}
          alt="Faz"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <a
          href="/"
          style={{
            color: "rgb(0, 0, 0)",
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Faz
        </a>
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              marginLeft: "20px",
            }}
          >
            <a
              href="/"
              style={{
                color: "rgb(0, 0, 0)",
                textDecoration: "none",
              }}
            >
              Home
            </a>
          </li>
          <li
            style={{
              marginLeft: "20px",
            }}
          >
            <a
              href="/about"
              style={{
                color: "rgb(0, 0, 0)",
                textDecoration: "none",
              }}
            >
              About
            </a>
          </li>
          <li
            style={{
              marginLeft: "20px",
            }}
          >
            <a
              href="/projects"
              style={{
                color: "rgb(0, 0, 0)",
                textDecoration: "none",
              }}
            >
              Projects
            </a>
          </li>
          <li
            style={{
              marginLeft: "20px",
            }}
          >
            <a
              href="/contact"
              style={{
                color: "rgb(0, 0, 0)",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="/"
          style={{
            color: "rgb(0, 0, 0)",
            textDecoration: "none",
          }}
        >
          Test
        </a>
      </div>
    </header>
  );
}
