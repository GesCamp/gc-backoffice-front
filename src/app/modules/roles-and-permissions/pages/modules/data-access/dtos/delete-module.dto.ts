import { ModuleDto } from './module.dto';

export type DeleteModuleDto = Readonly<Pick<ModuleDto, 'id'>>;
