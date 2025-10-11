import { GetAllModulesDto } from 'src/app/modules/roles-and-permissions/pages/modules/data-access';

export type InactiveModulesTableDto = Readonly<{
  [Key in keyof Pick<GetAllModulesDto, 'id' | 'code' | 'name'>]: Readonly<{
    label: string;
    value: GetAllModulesDto[Key];
  }>;
}>;
