import { useRef, useEffect, useState } from "react";
import "./canvas.css";

export default function ScoreCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [measureCount, setMeasureCount] = useState<number>(1);

  const staffHeight = 50;
  const spacing = 10;
  const measureWidth = 150;

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 1000, 300);

    for (let m = 0; m < measureCount; m++) {
      const x = 50 + m * measureWidth;

      // lignes
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(x, staffHeight + i * spacing);
        ctx.lineTo(x + measureWidth, staffHeight + i * spacing);
        ctx.stroke();
      }

      // barre de mesure
      ctx.beginPath();
      ctx.moveTo(x, staffHeight - 5);
      ctx.lineTo(x, staffHeight + 4 * spacing + 5);
      ctx.stroke();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    draw(ctx);
  }, [measureCount]);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} width={1000} height={300} />

      <button
        style={{ position: "absolute", top: 10, left: 10 }}
        onClick={() => setMeasureCount((prev) => prev + 1)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
    </div>
  );
}