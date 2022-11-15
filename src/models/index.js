// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Employee, EmployeeProject } = initSchema(schema);

export {
  Project,
  Employee,
  EmployeeProject
};