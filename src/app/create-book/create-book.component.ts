import {Component, OnInit} from '@angular/core';
import {BooklistService} from '../booklist.service';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
    name = new FormControl('');
    imgUrl = new FormControl('');
    description = new FormControl('');
    author = new FormControl('');
    isbn = new FormControl('');
    year = new FormControl('');
    rating = new FormControl('');

    nameVal;
    imgUrlVal;
    descriptionVal;
    authorVal;
    isbnVal;
    yearVal;
    ratingVal;

    constructor(private bookService: BooklistService) {
    }

    createBook() {

        this.nameVal = new String(this.name.value);
        this.imgUrl.value;
        this.description.value;
        this.author.value;
        this.isbn.value;
        this.yearVal = new String(this.year.value);
        this.rating.value;

        console.log(this.nameVal);
        this.bookService.addBook(this.name.value, this.imgUrl.value, this.description.value, this.author.value, this.isbn.value, this.yearVal, this.rating.value);
    }

    ngOnInit() {
    }

}
