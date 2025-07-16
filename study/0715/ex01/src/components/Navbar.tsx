export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white border rounded-lg bg-cyan-800 ">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}
