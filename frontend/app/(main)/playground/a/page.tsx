import Link from "next/link";

export default function PageB() {
  return (
    <div>
      <h1>Page B</h1>

      <Link href="/playground/a">Go to A</Link>
    </div>
  );
}