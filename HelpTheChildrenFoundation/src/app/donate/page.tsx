import { Suspense } from "react";
import DonatePage from "./DonatePage";

export default function Donate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonatePage />
    </Suspense>
  );
}
