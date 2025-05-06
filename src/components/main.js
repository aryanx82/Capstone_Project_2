import React,{useState,useEffect} from 'react'
import Course from './course';
import Search from './search'

export default function Main() {

    const [content,setContent]=useState('Home')
    const [data, setData] = useState(null);


    useEffect(() => {
        let url = '';
    
        if (content === 'Coursera') {
          url = 'https://jsonplaceholder.typicode.com/posts/1';        //test API
        } else if (content === 'Udemy') {
          url = 'https://jsonplaceholder.typicode.com/posts/2';        //test API
        } else if (content === 'Edx') {
          url = 'https://jsonplaceholder.typicode.com/posts/3';        //test API
        }

        if (url) {
          fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error('Fetch error:', err));
        } else {
          setData(null);
        }
      }, [content]);
    
  return (
    <>
        <div className='main'>
            <div className='buttons'>
            <button className='box button' onClick={() => setContent('Coursera')} >Coursera</button>
            <div className='part' style={{width: 1.38, height: 85.99}}></div>
            <button className='box button' onClick={() => setContent('Udemy')}>Udemy</button>
            <div className='part' style={{width: 1.38, height: 85.99}}></div>
            <button className='box button' onClick={() => setContent('Edx')}>EDX</button>
            <div className='part' style={{width: 1.38, height: 85.99}}></div>
            <button className='box button' onClick={()=>setContent('Bookmark')}>Bookmark</button>
            </div>
            <Search/>

            {data ? (
          <div className="results">
            <h3>Fetched Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          content !== 'Home' && <p>Loading or no data available.</p>
        )}
        </div>
    </>
  )
}
