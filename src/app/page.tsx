import { Suspense } from 'react';
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from './Context/DialogContext';

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback="Carregando...">
        <GithubUser username="ajjunior33" />
      </Suspense>
    </DialogProvider>
  )
}
