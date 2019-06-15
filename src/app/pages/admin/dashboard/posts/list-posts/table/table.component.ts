import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {PostsService} from '@servicesposts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  selectedOption = 'title';
  displayedColumns = ['title', 'url', 'language', 'draft', 'date', 'created', 'edit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private postsService: PostsService) { }

  ngAfterViewInit() {
    this.postsService.getPosts().subscribe(res => {
      const array = [];
      res.forEach((item: any) => {
        const id = item.id;
        for (const prop of Object.keys(item.body)) {
          array.push(Object.assign({id}, item.body[prop]));
        }
      });
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.filterBy(this.selectedOption);
    });
  }

  filterBy(val) {
    this.dataSource.filterPredicate = (data, filter: string): boolean => data[val].toLowerCase().includes(filter);
  }

  changeFilter() {
    this.filterBy(this.selectedOption);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  trackBy(index, item) {
    return item.url;
  }

}
