import { Component, input, output } from '@angular/core';
import { FilterTableDto } from './dtos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters-table',
  imports: [CommonModule],
  templateUrl: './filters-table.component.html',
  styleUrl: './filters-table.component.css',
})
export class FiltersTableComponent {
  config = input<FilterTableDto[]>([], { alias: 'config' });
  values = input<Record<string, string>>({}, { alias: 'values' });

  valuesChange = output<Record<string, string>>();

  onChange(key: string, value: string) {
    if (value.length === 0 || value.length >= 4) {
      this.valuesChange.emit({
        ...this.values(),
        [key]: value,
      });
    }
  }
}
