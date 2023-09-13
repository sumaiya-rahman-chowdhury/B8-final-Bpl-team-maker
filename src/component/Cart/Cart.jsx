/* eslint-disable react/prop-types */


const Cart = ({selectedActors}) => {
    console.log(selectedActors)

    return (
        <div>
            <h3 className=" text-xl font-bold">Total Selected : {selectedActors.length}</h3>
           {
            selectedActors.map((selectedActor,idx)=><div className=" mt-4 flex gap-4 items-center justify-between" key={idx}><h1 className=" font-bold">{selectedActor.name}</h1>
            <img src={selectedActor.image} alt="" className=" w-12" />
               </div> 
                )
           }
        </div>
    );
};

export default Cart;