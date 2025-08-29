"use client";

import * as React from "react";
import Lottie from "lottie-react";

type LottieJSON = Record<string, unknown>;

export default function NotFoundAnim() {
  const [data, setData] = React.useState<LottieJSON | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetch("/404.json")
      .then((r) => r.json() as Promise<LottieJSON>)
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch(() => {
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      className="w-72 h-72 md:w-96 md:h-96"
    />
  );
}

