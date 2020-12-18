import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as auth from '../../actions/auth.actions';
import { cold } from 'jasmine-marbles';

import { User } from '../../../shared/models/user.model';

describe('CustodiansComponent', () => {
  let store: MockStore;

  const initialState = { isLogin: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
    //spyOn(store, 'dispatch').and.callFake(() => { });
  });



  it('should create', () => {
    expect(store).toBeTruthy();
  });


  it('should dispatch loggedIn', () => {
    /*spyOn(store, 'dispatch').and.callThrough();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(auth.loggedIn({ isLogin: true }));*/

    // const expected = cold('a', { a: auth.loggedIn({isLogin: true}) });
  //  const expected = cold('a', { a: true });
   // expect(store.scannedActions$).toBeObservable(expected);

    store.subscribe(val => {
      expect(val).toEqual(initialState);
    });
  });

  /*it('should render flase insteadof true', () => {
    store.overrideSelector('loggedIn', false);
    expect(store.dispatch).toHaveBeenCalledTimes(1);

  });*/

  /* it('should loggin if is true', () => {
     const action =  auth.loggedIn({ isLogin: true });
     store.dispatch(action);
   });*/



  /*it('should return true if the user state is logged in', () => {
    store.setState({ loggedIn: true });
    store.select('user');
    expect(1).toEqual(1);
  });*/

});


