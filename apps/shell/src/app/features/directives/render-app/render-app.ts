import { Directive, effect, input, Type, ViewContainerRef } from '@angular/core';
import { AppItem } from '../../../core/models/app';
import { Error } from '../../components/error/error';
import { Spinner } from '../../components/spinner/spinner';

@Directive({
  selector: '[appRenderApp]'
})
export class RenderApp {
  appRenderApp = input.required<AppItem>();
  loaderComponent = input<Type<any>>(Spinner);
  errorComponent = input<Type<any>>(Error);

  constructor(private readonly viewContainerRef: ViewContainerRef) {
    effect(() => {
      this.viewContainerRef.clear();

      const app = this.appRenderApp();
      const loaderComp = this.loaderComponent();
      const errorComp = this.errorComponent();

      switch (app.status) {
        case 'pending':
          this.viewContainerRef.createComponent(loaderComp);
          break;
        case 'success':
          this.viewContainerRef.createComponent(app.component!.App);
          break;
        case 'error':
          const componentRef = this.viewContainerRef.createComponent(errorComp);
          componentRef.setInput('message', app.errorReason); 
          break;
      }
    });
  }
}