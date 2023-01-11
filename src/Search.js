import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Search = () =>{

  const[query,setQuery] = useState("")//awal shi vide
  const[posts,setPost] = useState(null)//heda kermel etb3oun el query

//useEffect 3mla vide kermel ta3mel dependecy mara ma tra2eb wala ta3eml
useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
  .then((res) => {
      console.log(res.data)
      setPost(res.data)
  })

},[]);

  return(
    <div>
    <h1 className="blue-grey-text">Search</h1>
    <div className='row'>
    <form className='col s6'>
    <div className='input-field col s6'>
    <input id="Search" type="text" class="validate" onChange={event => setQuery(event.target.value)}/>
    {/* heda byet8ayar 7asab el input e.target bi 8ayer el query */}
    <label for="Search">Search</label>
    {/* hala2 la et2akad enou ma3loumet jeyer min api fa b2oul post && */}
    </div>           
    </form>            
 </div>
    <table className="highlight blue-grey-text centered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
    {posts && 
      posts.filter(post => {
        if(query === ''){
           return post;
        }else if(post.category.includes(query)){
          //jeze2 min keteba ykon jeze2 min heda
          return post
        }
      }).map((post,Id)=>(
        //houn 7asab el filter rateboun
          <tbody>
                  <tr key={post.Id}>
                    <td>{post.id}</td>
                    <td>{post.category}</td>
                    <td>{post.price}</td>
                  </tr>
          </tbody>
      ))
    }
    </table>
    </div>
  );
}

export default Search