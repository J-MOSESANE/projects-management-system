import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly documents: string;
  readonly employee: string;
  readonly status: string;
  readonly start_timestamp: string;
  readonly end_timestamp: string;
  readonly employees?: (EmployeeProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly documents: string;
  readonly employee: string;
  readonly status: string;
  readonly start_timestamp: string;
  readonly end_timestamp: string;
  readonly employees: AsyncCollection<EmployeeProject>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

type EagerEmployee = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly linemanager: string;
  readonly capacity: number;
  readonly EmployeeToProjects?: (EmployeeProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly linemanager: string;
  readonly capacity: number;
  readonly EmployeeToProjects: AsyncCollection<EmployeeProject>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}

type EagerEmployeeProject = {
  readonly id: string;
  readonly project: Project;
  readonly employee: Employee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployeeProject = {
  readonly id: string;
  readonly project: AsyncItem<Project>;
  readonly employee: AsyncItem<Employee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmployeeProject = LazyLoading extends LazyLoadingDisabled ? EagerEmployeeProject : LazyEmployeeProject

export declare const EmployeeProject: (new (init: ModelInit<EmployeeProject, EmployeeProjectMetaData>) => EmployeeProject) & {
  copyOf(source: EmployeeProject, mutator: (draft: MutableModel<EmployeeProject, EmployeeProjectMetaData>) => MutableModel<EmployeeProject, EmployeeProjectMetaData> | void): EmployeeProject;
}