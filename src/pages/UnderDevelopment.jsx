import underConstruction from "../assets/illustration/under-construction.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 font-san max-w-lg mx-auto overflow-hidden">
      <img
        src={underConstruction}
        alt="under construction"
        className="w-4/5 max-w-[280px] mb-5 mx-auto"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Under Development :)
      </h2>
      <p className="text-gray-500 text-sm sm:text-base mt-2">
        Please visit my{" "}
        <a
          href="https://github.com/andkstrr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
