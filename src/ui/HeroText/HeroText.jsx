import "./styles.css";

export default function HeroText() {
  return (
    <>
      Transforming{" "}
      <span
        className="text-transparent
        bg-clip-text bg-gradient-to-r
        from-primary
        via-amber-500
        to-secondary
        background-animate
        "
      >
        ideas
      </span>{" "}
      into beautiful websites
    </>
  );
}
