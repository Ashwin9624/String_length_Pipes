import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(term: any): any {
    if (term.length % 2 === 0) {
      return "EVEN";
    } else {
      return "ODD";
    }
  }
}
