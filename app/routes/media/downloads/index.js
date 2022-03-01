import React from 'react'
import {redirect} from 'remix'


export default function action({ request }){
    return redirect('/media/downloads/forms')
}