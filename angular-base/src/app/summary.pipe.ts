import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(value: string,limit?: number): any {
        if(!value){
            return null;
        }
        let actualLimit = (limit)? limit: 50;
        return value.substr(0,actualLimit) + '.....';
    }
}
// Input() properties to pass state to the component
// Output() 
//This is Component API
