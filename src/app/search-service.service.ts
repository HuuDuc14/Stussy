// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');  // Tạo BehaviorSubject để lưu trạng thái tìm kiếm
  search$ = this.searchSubject.asObservable();  // Tạo observable để các component subscribe

  updateSearch(query: string) {
    this.searchSubject.next(query);  // Cập nhật giá trị tìm kiếm
  }
}

