import { ModuleDto } from './module.dto';

export type UpdateModuleDto = Readonly<
  Pick<ModuleDto, 'id'> & {
    newName: string;
  }
>;
