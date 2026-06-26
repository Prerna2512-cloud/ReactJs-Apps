import axios from 'axios'
import { useEffect, useState } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get('https://dummyjson.com/recipes')
            console.log(res.data.recipes)
            setRecipes(res.data.recipes)
        }
        fetchData()
    },[])

    return (
        <>
            <div>Recipes</div>
            <div className="container">
                <div className="row">
                    {recipes.map((rec, i) => (
                        <div className="col-12" key={i}>
                            <div className="card mb-3">
                                <img src={rec.image} className="card-img-top" alt="..." 
                                style={{width:"200px",height:"200px"}}
                                />
                                    <div className="card-body">
                                        <h5 className="card-title">{rec.name}</h5>

                                        {rec.mealType.map((mt,idx)=>(<span key={idx} className='badge rounded-pill text-bg-warning'>{mt}</span>))}
                                        <p>Rating : {rec.rating}</p>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <h2>ingredients</h2>
                                                <ul>
                                                {rec.ingredients.map((ing,index)=>(
                                                    <li key={index}>{ing}</li>
                                                ))}
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <h2>instructions</h2>
                                                <ol>
                                                {
                                                    rec.instructions.map((inc,index)=>(
                                                        <li key={index}>{inc}</li>
                                                    ))
                                                }
                                                </ol>
                                            </div>

                                        </div>
                                    </div>

                                    </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Recipes