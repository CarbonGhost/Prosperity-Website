import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between gap-6 py-5 mx-auto">
      <div className="flex gap-6">
        <p>Prosperity MC</p>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/wiki">Wiki</Link>
      </div>

      <div className="flex gap-6">
        <button>Join</button>
      </div>
    </div>
  );
}
