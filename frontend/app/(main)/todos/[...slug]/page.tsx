export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Catch All Route</h1>

      <p>{slug.join(" / ")}</p>
    </div>
  );
}