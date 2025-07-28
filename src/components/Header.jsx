import CnnLogo from "../assets/cnn-logo.png";

export default function Header() {
  return (
    <header className="bg-white p-2 text-black border-b-2 border-black flex flex-row items-center justify-between">
      <img src={CnnLogo} alt="CNN Logo" className="h-8 w-auto mr-3" />
      <h1 className="sm:text-2xl text-lg font-bold overflow-ellipsis truncate">
        Media Management Team
      </h1>
    </header>
  );
}
