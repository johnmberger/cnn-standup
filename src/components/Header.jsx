import CnnLogo from "../assets/cnn-logo.png";

export default function Header() {
  return (
    <header className="bg-white p-2 text-black border-b-2 border-black flex flex-row items-center justify-between">
      <img src={CnnLogo} alt="CNN Logo" className="h-8 w-auto mb-2" />
      <h1 className="text-2xl font-bold">Media Management Team</h1>
    </header>
  );
}
