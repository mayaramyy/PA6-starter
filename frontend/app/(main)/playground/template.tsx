import Counter from "../../components/Counter";

export default function PlaygroundTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Template Counter</h2>

      <Counter />

      {children}
    </div>
  );
}