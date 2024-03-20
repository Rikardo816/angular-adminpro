import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``,
})
export class RxjsComponent implements OnDestroy {

  public intervalSbus: Subscription

  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (valor) => console.log('Subs', valor),
    //     (error) => console.error('Error', error),
    //     () => console.info('Completado')
    //   );

    this.intervalSbus = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSbus.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10), // Emite 10 valores
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false)), // Filtra los valores pares
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });

    return obs$;
  }
}
