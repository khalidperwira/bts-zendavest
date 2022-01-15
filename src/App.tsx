import React, {Suspense} from 'react'
import './App.css'

export default function App() {
  const Book = React.lazy(()=>import("./Book"));
  const Download = React.lazy(()=>import("./DownloadComponent"));
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading. . .</div>}>
          <Book></Book>
          <Download></Download>
        </Suspense>
      </main>
    </>
  )
}