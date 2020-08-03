import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  color: string = getComputedStyle(document.querySelector('body')).getPropertyValue('--primary');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.changeOfRoute();
  }

  private changeOfRoute(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      this.updateTitle(event.breadcrumb);
      this.updateMetaDescription(event.breadcrumb);
      this.scrollTop();
    });
  }

  private updateTitle(title: string): void {
    this.title.setTitle(
      `${title} — Pokemon TCG`
    );
  }

  private updateMetaDescription(text: string): void {
    this.meta.updateTag(
      { name: 'description', content: text }
    );
  }

  private scrollTop(): void {
    window.scrollTo(0, 0);
  }

}
