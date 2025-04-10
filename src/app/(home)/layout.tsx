import type { Metadata } from "next";

import HomeLayout from "@/components/pages/home/layout";

export const metadata: Metadata = {
  title: "4Fun Community",
  description: "Movement based counter-strike servers",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HomeLayout>{children}</HomeLayout>;
}
