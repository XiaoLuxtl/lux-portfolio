/* eslint-disable react/prop-types */
import "../ui/styles.css";

export default function Hero({ title, p, btnText }) {
  return (
    <div className="relative min-h-[calc(100vh_-_80px)]">
      <div className="skewed bg-base-200 w-full">
        <div className="normalize">
          <div className="hero h-full">
            <div className="hero-content text-center">
              <div className="max-w-md">
                {title && <h1 className="text-5xl font-bold">{title}</h1>}
                {p && (
                  <p className="flex py-6 text-center justify-center text-primary">
                    {p}
                  </p>
                )}
                {btnText && (
                  <button className="btn btn-primary">{btnText}</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
