import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
    constructor() { }
    // isFavorite:boolean;
    @Input('isSelected') isFavorite:boolean;
    @Output('change') click = new EventEmitter();
    ngOnInit(): void { }
    onClick(){
        this.isFavorite = !this.isFavorite;
        this.click.emit({newValue: this.isFavorite});
    }
}

export interface FavoriteChangedEventArgs {
    newValue: boolean;
}


