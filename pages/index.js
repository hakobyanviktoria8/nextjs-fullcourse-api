import React from 'react'
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <hr/>
        <Link href="/comments">Comments </Link>



    </div>
  )
}

export default Home