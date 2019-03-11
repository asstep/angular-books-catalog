import {Component, OnInit} from '@angular/core';
import {BooklistService} from '../booklist.service';
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
    thisBook;
    name = new FormControl('');
    imgUrl = new FormControl('');
    description = new FormControl('');
    author = new FormControl('');
    isbn = new FormControl('');
    year = new FormControl('');
    rating = new FormControl('');

    constructor(private bookArray: BooklistService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        this.thisBook = this.bookArray.getBookById(id);
    }
}
