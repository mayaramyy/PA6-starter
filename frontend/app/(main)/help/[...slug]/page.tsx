import Link from "next/link";

export default async function HelpPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Help</h1>

      <Link href="/help">Help</Link>

      {slug.map((item, index) => (
        <span key={index}>
          {" > "}
          {item}
        </span>
      ))}
    </div>
  );
}