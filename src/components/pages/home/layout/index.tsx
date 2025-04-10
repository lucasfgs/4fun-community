import { ReactNode } from "react";

import { NavigationBar } from "./navigation-bar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <NavigationBar />
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 pt-20 py-8">
        {children}
      </main>
    </div>
  );
}
