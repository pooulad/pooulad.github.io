import { HiremeIcon } from "@/assets/ts";
import React, { memo } from "react";

function Hireme() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 flex items-center justify-center relative h-auto">
        <HiremeIcon className="fill-dark animate-spin-slow" />
      </div>
    </div>
  );
}

export default memo(Hireme);
