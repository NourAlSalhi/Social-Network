import { createNewContact, getContacts, getContactId,updateContact,deleteContact } from "../controllers/crmControllers.js";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)
    .post(createNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactId)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;