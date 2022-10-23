// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VouchersModel } = initSchema(schema);

export {
  VouchersModel
};