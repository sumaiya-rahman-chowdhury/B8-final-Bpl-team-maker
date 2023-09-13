
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {

    const [actors,setActors] = useState([]);
    const [selectedActors,setSelectedActors] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data=>setActors(data))
    },[]);

    

    const handleSelectActor = (actor)=>{

        const isSelected = selectedActors.find(item=> item.id === actor.id) ;

        let count = actor.salary ;
        if(isSelected){
            return alert('Selected')
        }
        else{ 

            selectedActors.forEach((item)=>{
                count = count + item.salary ;
            })
            console.log(count)
        const actorList = [...selectedActors,actor]
        setSelectedActors(actorList);
        }

    }
    // console.log(selectedActors)

    return (
        <div >
            <div className='home-container flex gap-x-10 flex-wrap h-screen mt-10'>
               <div className='card-container w-[800px] text-white flex flex-wrap gap-5 justify-center'>

                {
                    actors.map((actor,idx)=>
                        <div key={idx} className='cards transition-transform transform hover:scale-110 w-[250px] border-[1px] border-gray-400 text-center space-y-2'>
                        <div className='flex justify-center items-center '>
                        <img src={actor.image} alt="" className=' w-20 h-20 rounded-full mt-3'/>
                        </div>
                        <h2 className=' font-bold text-xl'>{actor.name}</h2>
                        <p className=' text-center px-3'><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime, laborum nemo minima iste eos impedit debitis. Nulla, itaque soluta!</small></p>
                        <div className=' flex gap-x-10 justify-center '>
                            <p>salary: {actor?.salary ? actor.salary : "Null"} $ </p>
                            <p>{actor.role}</p>
                        </div>
                        <div className='pb-3'>
                        <button onClick={()=>handleSelectActor(actor)} className=' bg-gray-700 text-white px-6 py-2 rounded '>Select</button>
                        </div>
                        </div>)
                }
               
                
               </div>
               <div className="cart text-white">
                   <Cart selectedActors={selectedActors}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;