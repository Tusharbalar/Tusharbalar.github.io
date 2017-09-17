import { Component } from '@angular/core';
import { IAppState } from '../../store';
import { NgRedux } from 'ng2-redux/lib';
import { INCREMENT } from '../../actions';

@Component({
    selector: 'app-redux-demo',
    templateUrl: 'redux-demo.component.html'
})


export class ReduxDemoComponent {

  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  private increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
