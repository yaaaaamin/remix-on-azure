import React from 'react'
import { useLoaderData } from 'remix'

export function loader (){
    const singleParent = [
        {
            mainDirectory:"Home",
            slug:"home"
        },
        {
            mainDirectory:"About",
            slug:"about"
        }
    ]

    return singleParent
}

function User() {

 const data = useLoaderData()

  return (
    <pre>{
        JSON.stringify(data,null,2)
    }</pre>
  )
}

export default User