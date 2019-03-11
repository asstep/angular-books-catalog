import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BooklistService {
    arrayLenght: number;
    arrayLastId: number;

    constructor() {
    }

    bookslist = [
        {
            id: 1,
            name: "HTML5: Up and Running",
            imgUrl: "http://frontendbookshelf.ru/images/1.jpg",
            description: 'HTML5 is still evolving, yet browsers such as Safari, Mozilla, Opera, and Chrome already support many of its features -- and mobile browsers are even farther ahead. HTML5: Up & Running carefully guides you though the important changes in this version with lots of hands-on examples, including markup, graphics, and screenshots. You\'ll learn how to use HTML5 markup to add video, offline capabilities, and more -- and you’ll be able to put that functionality to work right away.',
            author: "МАРК ПИЛГРИМ",
            isbn: '978-5-12345-321-9',
            year: "2011",
            rating: '4'
        },
        {
            id: 2,
            name: "HTML5. Рецепты программирования",
            imgUrl: "http://frontendbookshelf.ru/images/2.png",
            description: 'Эта книга, представляющая собой сборник рецептов и готовых решений, позволит вам получить практический опыт работы с основными элементами HTML5. Издание охватывает широкий круг вопросов: от семантической разметки, веб-форм и мультимедийных элементов до технологий геолокации и JavaScript API.',
            author: "КРИСТОФЕР ШМИТТ, КАЙЛ СИМПСОН",
            isbn: '978-5-459-01265-1',
            year: "2000",
            rating: '3'
        },
        {
            id: 3,
            name: "Programming HTML5 Applications",
            imgUrl: "http://frontendbookshelf.ru/images/3_.jpg",
            description: 'HTML5 is not just a replacement for plugins. It also makes the Web a first-class development environment by giving JavaScript programmers a solid foundation for building industrial-strength applications. This practical guide takes you beyond simple site creation and shows you how to build self-contained HTML5 applications that can run on mobile devices and compete with desktop apps.',
            author: "ЗАХАРИ КЕССИН",
            isbn: '978-5-12345-323-9',
            year: "2001",
            rating: '5'
        },
        {
            id: 4,
            name: "HTML5 Canvas",
            imgUrl: "http://frontendbookshelf.ru/images/4.jpg",
            description: 'Flash is fading fast as Canvas continues to climb. The second edition of this popular book gets you started with HTML5 Canvas by showing you how to build interactive multimedia applications. You’ll learn how to draw, render text, manipulate images, and create animation—all in the course of building an interactive web game throughout the book.',
            author: "СТИВ ФУЛТОН, ДЖЕФФ ФУЛТОН",
            isbn: '978-5-12345-325-9',
            year: "2002",
            rating: '2'
        },
        {
            id: 5,
            name: "JavaScript. Сильные стороны",
            imgUrl: "http://frontendbookshelf.ru/images/7.png",
            description: 'Любой язык программирования имеет свои сильные и слабые стороны, однако язык JavaScript в большей степени состоит из последних, так как был разработан в спешке и практически не отлаживался. В этой книге среди множества самых ужасных JavaScript-конструкций выделены наиболее надежные, понятные и удобные в сопровождении то подмножество языка, которое позволяет создавать по-настоящему расширяемый и эффективный код.',
            author: "ДУГЛАС КРОКФОРД",
            isbn: '978-5-12345-326-9',
            year: "2005",
            rating: '3'
        },
        {
            id: 62,
            name: "JavaScript. Оптимизация производительности",
            imgUrl: "http://frontendbookshelf.ru/images/11.jpg",
            description: 'Если вы относитесь к подавляющему большинству веб-разработчиков, то наверняка широко применяете JavaScript для создания интерактивных веб-приложений с малым временем отклика. Проблема состоит в том, что строки с программным кодом на языке JavaScript могут замедлять работу приложений. ',
            author: "НИКОЛАС ЗАКАС",
            isbn: '978-5-93286-213-1',
            year: "2007",
            rating: '5'
        },
    ]

    getBookslist() {
        return this.bookslist;
    }

    getBookById(id) {
        for (let item of this.bookslist) {
            if (item.id == id) {
                return item;
            }
        }
    }

    addBook(name, imgUrl, description, author, isbn, year, rating) {
        this.arrayLenght = this.bookslist.length;
        this.arrayLastId = this.bookslist[this.arrayLenght-1].id;

        this.bookslist[this.arrayLenght] = {
            id: ++this.arrayLastId,
            name: name,
            imgUrl: imgUrl,
            description: description,
            author: author,
            isbn: isbn,
            year: year,
            rating: rating,
        }
        return true;
    }
}
