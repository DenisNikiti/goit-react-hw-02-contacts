import Contact from "../../Contact/Contact"



function Contacts({list,filter}) {
    const search = (event) => {
   
  
        
        filter(list.filter( contact => contact.name.toLowerCase().includes(event.target.value.toLowerCase())))
          
     }
    return (

        <div>
            <p>Find contact</p>
            <input type="text" name="filter" onInput={search } />

        <ul>
            {list.map((contact) => {
                return (

                    <Contact id={contact.id} name={contact.name} number ={contact.number} />


                )
                


            }        )
            
            
            }

        </ul>


            </div>
    
    )
}
export default Contacts