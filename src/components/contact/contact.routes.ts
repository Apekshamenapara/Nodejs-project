import { Router } from 'express';
import contactController from './contact.controller';

export const contactRoute = Router({ strict: false });

/**
 * create new contact doc
 */
 contactRoute.get(
    `/`,
    contactController.createContacts,
);

export default contactRoute;
