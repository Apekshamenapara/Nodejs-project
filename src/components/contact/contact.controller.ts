import { NextFunction, Request, Response } from 'express';
import Config from '../../config';
import { log } from '../../services/logger';
import HttpExceptions, { ERROR_CONST } from '../../utils/error-utils';
import { successCommonCode, SuccessResponse } from '../../utils/success-utils';
import { createContact } from './contact.DAL';

const MODULE_NAME_FOR_LOG = 'contact.controller';

class ContactController {
    /**
     * creating records record in database
     */
    public async createContacts(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {contactList} = req.query;
            const contactListArr = JSON.parse(contactList);
            const filteredContactList = [...new Set(contactListArr.map(contact => contact.slice(contact.length - 10)))];

            for(let i=0 ;i <filteredContactList.length; i++){
                await createContact({contactNumber:filteredContactList[i] })
            }
            
            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.CREATED_SUCCESSFULLY,
                data: {},
                description: 'Contacts created successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }
}

export const contactController = new ContactController();
export default contactController;
