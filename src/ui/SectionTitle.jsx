/* eslint-disable react/prop-types */
export function SectionTitle({ text }) {
  return (
    <span
      className="text-5xl font-bold
      text-transparent
        bg-clip-text bg-gradient-to-r
        from-primary
        to-secondary
        "
    >
      {text}
    </span>
  );
}
