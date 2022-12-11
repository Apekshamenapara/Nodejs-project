import { Application } from 'express';
import contactRoute from '../components/contact/contact.routes';

export class ApplicationConfig {
    public static registerRoute(app: Application) {
        app.use('/contact', contactRoute);
    }
}
