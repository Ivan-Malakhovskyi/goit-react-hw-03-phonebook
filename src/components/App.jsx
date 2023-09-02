import { Component } from "react"
import { Layout } from "./phonebook/Layout"
import { FormUser } from "./phonebook/ContactForm";
import { Filter } from "./phonebook/ContactFilter";
import { ContactList } from "./phonebook/ContactList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";
import { GlobalStyle } from "./phonebook/GlobalStyle";
import { MainTitle, Title } from "./phonebook/ContactForm.styled";


const initialValue = {
  contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  name: '',
  number: '',
  filter: '',
}



export class App extends Component {
  
  state = { ...initialValue }
  

componentDidMount = () => {

  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts !== null) {
    this.setState({
        contacts: JSON.parse(savedContacts),
      })
  }
    
}


  componentDidUpdate = (prevProps, prevState) => {
    // console.log("prevState:", prevState)
    // console.log("this.state:",this.state )
    console.log(prevState.contacts === this.state.contacts)

    const isAddedNewContact = prevState.contacts !== this.state.contacts 
      
    const isAddedSearchFilters = prevState.filter !== this.state.filter
      
    if (isAddedNewContact || isAddedSearchFilters) 
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
          localStorage.setItem('filter',JSON.stringify(this.state.filter))
    }



  handleSubmit = (values,{resetForm})  => {
    const { contacts, name, number } = values

    console.log(values)


    const isContactInPhoneBook = contacts.find((contact) => contact.name === name && contact.number === number) 

    if (isContactInPhoneBook) {
      toast.error(`${name} already exists.`)
      resetForm()
      return
    }

    toast.success(`${name} has succesfully added to your phonebook`)   
    
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    }
    console.log(newContact)

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }))
    resetForm()
  }
  
  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  }
  
  
  filteredContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  } 


  onDeleteContact = (id) => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
  }


  resetFilters = () => {
    this.setState({
        filter: '',
    })
  }
  
  render() {
  
    const {filter} = this.state
  return (
    <Layout>
      <MainTitle>Phone book</MainTitle>

      <FormUser initialValue={this.state} handleSubmit={this.handleSubmit} />
      <ToastContainer/>

      <Title>Contacts</Title>
      
      <Filter value={filter} changeFilter={this.changeFilter} onReset={ this.resetFilters} />
      
      <ContactList filter={this.filteredContacts()} onDeleteContact={this.onDeleteContact} />

      <GlobalStyle/>
    </Layout>
  )
}
};
