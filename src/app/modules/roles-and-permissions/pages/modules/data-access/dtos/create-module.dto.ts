import { ModuleDto } from './module.dto';

export type CreateModuleDto = Readonly<Pick<ModuleDto, 'code' | 'name'>>;
