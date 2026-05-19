// Vendor shim for beicon v2
// This is a stub - actual implementation would need to match the ClojureScript beicon library

export class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  pipe(...operators) {
    return operators.reduce((obs, op) => op(obs), this);
  }

  subscribe(onNext, onError, onComplete) {
    return this._subscribe({ next: onNext, error: onError, complete: onComplete });
  }

  subscribeOn(scheduler) {
    return this;
  }

  map(fn) {
    return new Observable((subscriber) => {
      return this.subscribe(
        (value) => subscriber.next(fn(value)),
        (err) => subscriber.error(err),
        () => subscriber.complete()
      );
    });
  }

  filter(predicate) {
    return new Observable((subscriber) => {
      return this.subscribe(
        (value) => { if (predicate(value)) subscriber.next(value); },
        (err) => subscriber.error(err),
        () => subscriber.complete()
      );
    });
  }

  scan(accumulator, seed) {
    return new Observable((subscriber) => {
      let current = seed;
      return this.subscribe(
        (value) => {
          current = accumulator(current, value);
          subscriber.next(current);
        },
        (err) => subscriber.error(err),
        () => subscriber.complete()
      );
    });
  }

  merge(...observables) {
    return new Observable((subscriber) => {
      const subscriptions = [];
      const total = observables.length + 1;
      let completedCount = 0;

      const checkComplete = () => {
        if (++completedCount === total) {
          subscriber.complete();
        }
      };

      subscriptions.push(this.subscribe(
        (value) => subscriber.next(value),
        (err) => subscriber.error(err),
        checkComplete
      ));

      for (const obs of observables) {
        subscriptions.push(obs.subscribe(
          (value) => subscriber.next(value),
          (err) => subscriber.error(err),
          checkComplete
        ));
      }

      return () => subscriptions.forEach(s => s.unsubscribe());
    });
  }

  share() {
    return this;
  }
}

export function create(subscribeFn) {
  return new Observable(subscribeFn);
}

export function of(...args) {
  return new Observable((subscriber) => {
    args.forEach(arg => subscriber.next(arg));
    subscriber.complete();
  });
}

export function subject() {
  let observers = [];
  return new Observable((subscriber) => {
    observers.push(subscriber);
    return () => {
      observers = observers.filter(o => o !== subscriber);
    };
  });
}

export function push(subs, value) {
  if (subs.next) subs.next(value);
}

export function map(fn) {
  return (obs) => obs.map(fn);
}

// Alias for interop
export default { Observable, create, of, subject, push, map };
