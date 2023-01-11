import { useState } from "react"
import { getCommets } from "../utils/utils"

function GetComment (){
const [comment , setComment] = useState()
getCommets().then(res)
}

export default GetComment