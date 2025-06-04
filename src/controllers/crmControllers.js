import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const createNewContact = async (req, res) => {
  const contact = new Contact(req.body);

  try {
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).send(err);
  }
}

//get specific contact by id
export const getContactId = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
}
