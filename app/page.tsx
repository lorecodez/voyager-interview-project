
import Spinner from "./components/Spinner";
import { lazy, Suspense } from "react";

const Title = lazy(() => import('@/app/components/Title').then( module => {
  return {default: module.default}
}))

const Objective = lazy(() => import('@/app/components/Objective').then( module => {
  return {default: module.default}
}))

const Education = lazy(() => import('@/app/components/Education').then( module => {
  return {default: module.default}
}))

const Experience = lazy(() => import('@/app/components/Experience').then( module => {
  return {default: module.default}
}))

const CodingJourney = lazy(() => import('@/app/components/CodingJourney').then( module => {
  return {default: module.default}
}))

const Hobbies = lazy(() => import('@/app/components/Hobbbies').then( module => {
  return {default: module.default}
}))

export default function Home() {
  return (
    <main className="bg-inherit">
      <Suspense fallback={<Spinner/>}>
        <Title/>
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Objective/> 
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Education/>
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Experience/>
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <CodingJourney/>
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Hobbies/>
      </Suspense>
    </main>
  );
}
