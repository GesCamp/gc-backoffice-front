export interface FilterTableDto {
  key: string;
  label?: string;
  type: 'text' | 'select';
  placeholder?: string;
  options?: string[];
}
