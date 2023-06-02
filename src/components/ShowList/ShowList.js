import React, { useEffect, useState } from 'react'
import { fetchShow } from '../fetchShow/fetchShow';
import Cards from '../Cards';

const ShowList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchShowData = async () => {
      let showData = await fetchShow();
      setData(showData)
    }
    fetchShowData();
  }, [])
//  console.log(data)
  return (
    <div className='container'>
      <div className='cards'>
        {data.map((d) => {
          return <Cards key={d.show.id} d={d}/>
        })}
      </div>
    </div>
  )
}

export default ShowList