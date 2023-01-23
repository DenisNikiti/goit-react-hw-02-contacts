import { Component } from "react";
import React from "react";
import Phonebook from "./components/ContactList/Phonebook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import { nanoid } from 'nanoid'





 export class App extends Component {


  


state = {
  contacts: [

    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},


  ],
  filter: false,
 
}

   
   
   checkContact = (name,number) => {
     
      for (const contact of this.state.contacts) {
        if (contact.name === name && contact.number) {
          return true
        }
      }
   
     
   }
   
   addContact = (name, number) => {
    
    
     
     if (this.checkContact(name,number)) {
      return alert(`${name} is alredy in contacts`)
     }
    
     

           
            
           

    this.setState(prevState => (
      {
  
     contacts: [...prevState.contacts, {id:nanoid(), name, number}]

  }


    )
    
    
    )
  
   }
   
   search = (massiv) => {
       
     this.setState(prevstate => ({
       
       
       filter:massiv
     })
       
       
     )
           
    
    

     
   }
   

   deleteContact = (id) => {
     
      
     for (const contact of this.state.contacts) {
       
       
       
       if (contact.id === id) {
           
         this.state.contacts.splice(this.state.contacts.indexOf(contact),1)
         
         this.setState(prevState => (
      {
     
    contacts: prevState.contacts
     
  }


    )
    
    
    )
         
         
           
           
         }
     }
     
     
   }

   render() {
     console.log(this.state.contacts)
      return (
        <div>
            
          
          
          <Phonebook onSubmit={this.addContact}  />
          <Filter list={this.state.contacts} filter={this.search} />
          
          {this.state.filter ? <Contacts list={this.state.filter} filter={this.search} deleteContact={this.deleteContact} /> :<Contacts list={this.state.contacts} filter={this.search} deleteContact={this.deleteContact} />}
           
           
          
            
          

     </div>
        
   )
        
    }
}





