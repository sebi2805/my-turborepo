"use client";

import * as React from "react";
import * as sebi from "dependent-package";
export const Button = () => {
  return <button onClick={() => sebi.externalDep()}>Boop</button>;
};
