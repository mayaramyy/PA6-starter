export default function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        {children}
      </section>

      <section>
        <h2>Statistics</h2>
        {stats}
      </section>

      <section>
        <h2>Recent Todos</h2>
        {recent}
      </section>
    </div>
  );
}