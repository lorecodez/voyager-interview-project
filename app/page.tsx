
import Spinner from "./components/Spinner";
import { lazy, Suspense } from "react";

const Title = lazy(() => import('@/app/components/Title').then( module => {
  return {default: module.default}
}))

const Objective = lazy(() => import('@/app/components/Objective').then( module => {
  return {default: module.default}
}))

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<Spinner/>}>
        <Title/>
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Objective/> 
      </Suspense>
    </main>
  );
}
