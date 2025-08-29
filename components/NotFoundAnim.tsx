"use client";

import * as React from "react";
import Lottie from "lottie-react";

export default function NotFoundAnim() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch("/404.json")      
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;
  return <Lottie animationData={data} loop autoplay className="w-72 h-72 md:w-96 md:h-96" />;
}
