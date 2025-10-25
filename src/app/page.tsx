export default function LandingPage() {
  return (
    <main className="w-full flex justify-center items-center h-screen bg-[#0A1447] text-[#F3EED9] px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-12 text-left w-full md:w-auto">
        Willkommen <br /> bei <span className="text-white">ClassDex</span>
      </h1>

      <div className="flex ml-80 gap-26">
        <a
          href="/register"
          className="bg-[#A3502D] hover:bg-[#8B3F22] px-10 text-2xl py-3 rounded text-white font-semibold transition"
        >
          Registrierung
        </a>
        <a
          href="/login"
          className="bg-[#A3502D] hover:bg-[#8B3F22] px-10 text-2xl py-3 rounded text-white font-semibold transition"
        >
          Anmeldung
        </a>
      </div>
    </main>
  );
}
