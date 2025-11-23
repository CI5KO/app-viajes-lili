"use client";

import { useEffect, useRef } from "react";
import { Card } from "..";
import { Chart as ChartJS, ChartConfiguration } from "chart.js/auto";

interface ChartProps {
  title: string;
  config: ChartConfiguration;
}

export default function Chart({ title, config }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new ChartJS(canvasRef.current, config);

    return () => {
      chartRef.current?.destroy();
    };
  }, [config]);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="relative w-full">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Card>
  );
}
