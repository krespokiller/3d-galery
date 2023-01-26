import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  constructor() { }
  /**
   *
   *
   * @type {ElementRef}
   * @memberof HeaderComponent
   *
   * triggerMenu is a button that help us to show or not the menu
   *
   *
   */
  @ViewChild('triggerMenu', { static: false}) triggerMenu!: ElementRef;

  /**
   *
   *
   * @type {Subscription}
   * @memberof HeaderComponent
   * clickedElement is a subscription used for the element
   *
   *
   */
  clickedElement: Subscription = new Subscription();
  /**
   *
   *
   * @type {boolean}
   * @memberof HeaderComponent
   * hidden is a flag for enabling a class
   *
   *
   *
   */
  hidden:boolean=true
  /**
   *
   *
   * @memberof HeaderComponent
   * life cycle hook of angular
   * in this case we subscribe to a template element event click
   *
   *
   */
  ngAfterViewInit() {
    this.clickedElement = fromEvent(this.triggerMenu.nativeElement, 'click').subscribe(() => this.togleMenu());
  }

  /**
   *
   *
   * @memberof HeaderComponent
   * life cycle hook of angular
   * in this case we unsubscribe to a template element event click
   *
   *
   */
  ngOnDestroy() {
    this.clickedElement.unsubscribe();
  }
  /**
   *
   *
   * @private
   * @memberof HeaderComponent
   * togleMenu changes tha value of the flag wich activate or not the menu in mobile
   *
   *
   */
  private togleMenu():void{
    this.hidden= !this.hidden
  }
}
