import "../globals.css";
import WhatsAnimate from "@/components/WhatsAnimate";

export const metadata = {
  title: "Economizing Futura",
  description:
    "Economizing Futura delivers innovative digital solutions, transforming ideas into powerful software for startups and businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>BMIC</title>
      </head>
      <body>
        {children}
        <WhatsAnimate />
      </body>
    </html>
  );
}
