import { ReactPropTypes } from "react";

function Phonebook() {
    
    return (


        <div><h1>Phonebook</h1>
          
            
            <form>
                <label></label>
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />


    </form>


        
        
        </div>
          
)


}

export default Phonebook