import ReactMarkdown from "react-markdown";
import "./Privacy.css";

const content = `
# Datenschutzerklärung

Beispieltext.

## Abschnitt 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Abschnitt 2

- Punkt eins
- Punkt zwei
- Punkt drei
`;

export default function Privacy() {
  return (
    <main className="privacy">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
