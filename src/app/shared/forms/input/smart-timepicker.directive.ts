import {Directive, ElementRef, OnInit} from '@angular/core';

declare var $: any;

@Directive({
    selector: '[smartTimepicker]'
})
export class SmartTimepickerDirective implements OnInit {

    constructor(private el: ElementRef) {
    }


    ngOnInit() {
        System.import('script!bootstrap-timepicker/js/bootstrap-timepicker.min.js').then(()=> {
            this.render()
        })

        console.log(this.el);

    }

    render() {
        $(this.el.nativeElement).timepicker().on("changeTime.timepicker", function (e) {
            console.log(e);
        });
    }
}
