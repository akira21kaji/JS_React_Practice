type ButtonProps = {
  label: string;
  color: string;
};
export default function Button({ label, color }: ButtonProps) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}
