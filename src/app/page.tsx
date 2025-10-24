export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-[#0A1447] text-[#F3EED9] px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-left w-full md:w-auto">
        Willkommen <br /> bei <span className="text-white">ClassDex</span>
      </h1>

      <div className="flex gap-6">
        <a
          href="/register"
          className="bg-[#A3502D] hover:bg-[#8B3F22] px-6 py-3 rounded text-white font-semibold transition"
        >
          Registrierung
        </a>
        <a
          href="/login"
          className="bg-[#A3502D] hover:bg-[#8B3F22] px-6 py-3 rounded text-white font-semibold transition"
        >
          Anmeldung
        </a>
      </div>
    </main>
  );
}
