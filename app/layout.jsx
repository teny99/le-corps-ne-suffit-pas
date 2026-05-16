import "./globals.css";

export const metadata = {
  title: "Le corps ne suffit pas",
  description: "Une expérience interactive du Projet 2033 sur la conscience, le corps et la biologie."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
