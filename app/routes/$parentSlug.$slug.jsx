import React from 'react'
import { useLoaderData } from 'remix'

export async function loader ({params}){
    const singleParent = [
        {
            parentSlug:"home",
            slug:"home"
        },
        {
            parentSlug:"home",
            slug:"yaamin"
        },
        {
            parentSlug:"yolo",
            slug:"yaamin"
        },
        {
            parentSlug:"home",
            slug:"about"
        }
    ]

    if(!(singleParent.some(e=>e.parentSlug == params.parentSlug) && singleParent.some(e=>e.slug == params.slug))){
        throw new Response("What a joke! Not found.", {
            status: 404,
        });
    }

    return {array: singleParent, param: params}
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