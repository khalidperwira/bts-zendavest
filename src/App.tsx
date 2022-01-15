import React, {Suspense} from 'react'
import './App.css'
import Loading from "./Loading"

export default function App() {
  const Book = React.lazy(()=>import("./Book"));
  const Download = React.lazy(()=>import("./DownloadComponent"));
  return (
    <>
      <main>
        <Suspense fallback={<Loading></Loading>}>
          <Book></Book>
          <Download></Download>
        </Suspense>
      </main>
    </>
  )
}