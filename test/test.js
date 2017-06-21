import 'babel-polyfill';
import assert from 'assert';
import Events from '../events';

describe('Events', () => {
  it('should dispatch event being listened', done => {
    const events = new Events();
    events.listen('test', done);
    events.dispatch('test');
  });

  it('should run array of callbacks for event dispatched', done => {
    const events = new Events();
    
    // A counter of events dispatched
    let nEventsDispatched = 0;

    // This function adds 1 to nEventsDispatched.
    // Once nEventsDispatched reaches 3, it runs
    // function 'done', successfully ending test
    function myEvent() {
      nEventsDispatched++;
      if (nEventsDispatched === 3) {
        done();
      }
    }

    // Listen to event 'test' 3 times, 
    // passing function 'myEvent' as callback
    events.listen('test', myEvent);
    events.listen('test', myEvent);
    events.listen('test', myEvent);

    // Dispatch event 'test' once.
    // This one time should call 'myEvent' 3 times
    // as it was set above
    events.dispatch('test');
  });
});