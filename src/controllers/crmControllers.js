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

export const getContactId = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true, runValidators: true }
    );
    res.json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const deleteContact = async (req, res) => {
  await Contact.removeAllListeners({_id: req.params.contactId });
  try {
    const contact = await Contact.findOneAndDelete({ _id: req.params.contactId });
    res.send("Contact deleted");
  } catch (err) {
    res.status(500).send(err);
  }
}