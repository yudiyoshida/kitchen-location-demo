import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

export type Column = {
  label: string;
  key: string;
  type: 'text' | 'date' | 'currency' | 'document' | 'phone' | 'status' | 'blocked';
}

export type PaginationEvent = {
  page: number;
  size: number;
}

@Component({
  selector: 'app-commom-table',
  standalone: true,
  templateUrl: './commom-table.component.html',
  styleUrl: './commom-table.component.scss',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class CommomTableComponent<T> implements OnChanges, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<T>;

  @Input({ required: true }) data!: T[];
  @Input({ required: true }) columns!: Column[];
  @Input({ required: true }) totalItems!: number;

  @Output() pageChange = new EventEmitter<PaginationEvent>();
  @Output() rowClick = new EventEmitter<T>();

  public displayedColumns!: string[];
  public dataSource!: MatTableDataSource<T>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = changes['columns'].currentValue.map((column: Column) => column.key);
    }
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(changes['data'].currentValue);
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit(): void {
    this.configurePaginator();
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  private configurePaginator(): void {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.dataSource.paginator = this.paginator;
  }

  public getNestedValue(obj: any, key: string): any {
    return key.split('.').reduce((acc, key) => acc[key], obj);
  }

  public onPageChange(event: PageEvent): void {
    this.pageChange.emit({
      page: event.pageIndex + 1,
      size: event.pageSize,
    });
  }
}
