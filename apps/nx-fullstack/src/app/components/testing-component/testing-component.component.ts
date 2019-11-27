import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'nx-fullstack-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingComponentComponent {

  private _entries: any[] = null;
  public message: string = null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.message = Date.now().toString();
      // console.log(this.message)
    }, 1000);
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }

  @Input()
  public set entries(entries: any[]) {
    this._entries = entries;
    // if (entries.length > 0) {
    //   this.message = entries[0] > 0.1
    //     ? '> 0.1'
    //     : '< 0.1';
    // }
  }

  public get entries(): any[] {
    return this._entries;
  }

}
