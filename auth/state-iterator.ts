import {ContextFrom, EventFrom, type StateFrom, StateMachine} from "@xstate/fsm";

export type InferState<TService extends  StateMachine.AnyService> = StateMachine.State<ContextFrom<TService>, EventFrom<TService>, StateFrom<TService>>
export async function* stateIterator <TService extends  StateMachine.AnyService>(this: TService): AsyncIterable<InferState<TService>> {
  type T=  InferState<TService>
  function promiseCapability() {
    let x = {} as {
      resolve: (v:  T) => void,
      reject: (reason?: any) => void,
      promise: Promise<T>
    };
    x.promise = new Promise((a, b) => {
      x.resolve = a;
      x.reject = b;
    });
    return x;
  }

  // This observer will drop values if the consumer is still busy.  I think this is the only
  // default that makes sense, but other observable combinators can add more specific buffering
  // strategies.
  let observer = {
    _next: promiseCapability(),
    current: this.state,
    next(v: T) {
      this.current = v;
      this._next.resolve(v);
      this._next = promiseCapability();
    }
  };

  const subscription =this.subscribe(observer.next.bind(observer));

  while (true) {
    yield await observer._next.promise;
  }
}
