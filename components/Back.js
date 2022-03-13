import React from "react";

import { useRouter } from "next/router";

const Back = () => {
  const router = useRouter();
  return (
    <a href="" onClick={() => router.back()} className="link">
      Back
    </a>
  );
};

export default Back;
