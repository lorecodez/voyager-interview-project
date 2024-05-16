import Image from "next/image";
import Spinner from "./components/Spinner";
import { lazy, Suspense } from "react";

const Title = lazy(() => import('@/app/components/Title').then( module => {
  return {default: module.default}
}))

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<Spinner/>}>
        <Title/>
      </Suspense>
    </main>
  );
}
