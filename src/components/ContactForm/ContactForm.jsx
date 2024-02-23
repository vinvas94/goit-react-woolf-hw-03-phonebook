import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled.js';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>{this.props.title}</h2>
        <Label htmlFor={this.nameId}>
          Name
          <Input
            name="name"
            type="text"
            required
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameId}
            placeholder="Entry your name"
          />
        </Label>
        <Label htmlFor={this.numberId}>
          Number
          <Input
            name="number"
            type="tel"
            required
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberId}
            placeholder="Entry your number"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
