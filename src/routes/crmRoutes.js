import { createNewContact, getContacts, getContactId } from "../controllers/crmControllers.js";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)
    .post(createNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactId)
    .put((req, res) => res.send("PUT request successful"))
    .delete((req, res) => res.send("DELETE request successful"));
};

export default routes;