import "../globals.css";
import WhatsAnimate from "@/components/WhatsAnimate";
export const metadata = {
  title: "Bharath Modern Insulation Company",
  description:
    "Economizing Futura delivers innovative digital solutions, transforming ideas into powerful software for startups and businesses worldwide.",
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAnimate />
      </body>
    </html>
  );
}
