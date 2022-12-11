import HttpException, { ERROR_CONST } from "../../utils/error-utils";
import { CONTACT_ERROR_CODES } from "./contact.error";
import Contact from "./contact.model";

const MODULE_NAME_FOR_LOG = 'contact.DAL';

export async function createContact(query) {
    try {
        return await Contact.findOneAndUpdate(query, query, {upsert: true, new: true});
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.UNHANDLED_ERROR,
            exceptionCode: 'CREATE_CONTACT_UNHANDLED_IN_DB',
            description: CONTACT_ERROR_CODES.CREATE_CONTACT_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
}