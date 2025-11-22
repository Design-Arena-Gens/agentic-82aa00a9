export const metadata = {
  title: "Revit Analytical Model Generator",
  description: "Generate a Revit add-in source zip that builds an analytical model with variable-section columns, curved walls, domes, and slabs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

