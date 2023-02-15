import React, { Component } from 'react';
import { Filter } from './Filter/Filter';

import { ContactList } from './ContactList/ContactList';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stingified = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stingified);
    }
  }

  addContact = contact => {
    if (this.state.contacts.some(el => el.name === contact.name)) {
      alert('!!!');
      return;
    }
    const newContact = { id: nanoid(), ...contact };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            color: '#3a3639',
            textShadow: '-5px -3px 5px #B23479',
          }}
        >
          My Phonebook
        </h1>
        <FormAddContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilterChange={this.handleFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
