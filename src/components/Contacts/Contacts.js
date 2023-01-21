import Contact from "../../Contact/Contact"



function Contacts({list,filter}) {
    const search = (event) => {

  
       console.log(filter(list.map( contact => contact.name.toLowerCase().includes(event.target.value))))
        
          
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