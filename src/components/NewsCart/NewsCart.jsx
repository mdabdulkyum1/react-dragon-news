import { useLoaderData } from "react-router-dom"
import SingleNews from "../SingleNews/SingleNews";


function NewsCart() {

    const { data } = useLoaderData();

  return (
    <div>
        <p className="mb-2">{data.length} News Found On This Category</p>
        <div className="grid grid-cols-1 gap-6">

        {
            data.map( (news, idx) => <SingleNews key={idx} news={news}></SingleNews>)
        }

        </div>
    </div>
  )
}

export default NewsCart