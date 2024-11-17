import { useParams } from "react-router-dom"


export const Product=()=>{
  
    const params=useParams()

    return (<>
    Product {params.id}
      
    </>)

}