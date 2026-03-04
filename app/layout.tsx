import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "יורם פרידמן - סוכנות לביטוח | בדיקת תיק ביטוח בחינם",
  description:
    "ביטוח משכנתא או ביטוח חיים? חיסכון של עד 60% בבדיקה חינמית אחת דרך הר הביטוח הממשלתי. יורם פרידמן סוכנות לביטוח.",
  openGraph: {
    title: "יורם פרידמן - סוכנות לביטוח | בדיקת תיק ביטוח בחינם",
    description:
      "ביטוח משכנתא או ביטוח חיים? חיסכון של עד 60% בבדיקה חינמית אחת. בלי התחייבות.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Heebo', sans-serif" }}>{children}</body>
    </html>
  );
}
