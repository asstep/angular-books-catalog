import {Component, OnInit} from '@angular/core';
import {BooklistService} from '../booklist.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    bookList = [];

    constructor(private bookArray: BooklistService) {
    }

    errorFunction(){
        console.log('asdasd');
    }
    ngOnInit() {
        this.bookList = this.bookArray.getBookslist();
        console.log(this.bookList);
    }

}
