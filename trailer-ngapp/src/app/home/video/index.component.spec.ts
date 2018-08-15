import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Store } from '@ngrx/store';
import { TestingModule, TestStore } from '@testing/utils';
import { CoreModule } from '@app/core';

import { HomeModule } from '../home.module';

import { IndexComponent } from './index.component';
import {
  IndexState,
  ActionIndexRetrieve
} from './index.reducer';

describe('IndexComponent', () => {
  /*let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let store: TestStore<IndexState>;

  const getSpinner = () => fixture.debugElement.query(By.css('mat-spinner'));

  const getError = () => fixture.debugElement.query(By.css('.error'));

  const getStocks = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-title'));

  const getInput = () => fixture.debugElement.query(By.css('input'));

  const getExchange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-content'));

  const getChange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-subtitle'));

  const getCaretUpDownItem = () =>
    fixture.debugElement.query(
      By.css('mat-card mat-icon[fontIcon="fa-caret-down"]')
    );

  describe('given component booted', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [TestingModule, CoreModule, HomeModule],
          providers: [{ provide: Store, useClass: TestStore }]
        }).compileComponents();
      })
    );

    beforeEach(
      inject([Store], (testStore: TestStore<IndexState>) => {
        store = testStore;
        store.setState({ query : '', loading: true });
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
    );

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    describe('and input changed', () => {
      let dispatchSpy: jasmine.Spy;

      beforeEach(() => {
        dispatchSpy = spyOn(store, 'dispatch');
        getInput().triggerEventHandler('keyup', { target: { value: 'A' } });
        fixture.detectChanges();
      });

      it('should trigger dispatch with correct input', () => {
        expect(dispatchSpy).toHaveBeenCalledTimes(1);
        expect(dispatchSpy).toHaveBeenCalledWith(
          new ActionIndexRetrieve({ query: 'A' })
        );
        expect(true).toBeTruthy();
      });
    });

    describe('and stocks are loading', () => {
      beforeEach(() => {
        store.setState({ query: 'TDD', loading: true });
        fixture.detectChanges();
      });

      it('should show spinner', () => {
        expect(getSpinner()).toBeTruthy();
      });
    });

    describe('and stocks are not loading', () => {
      beforeEach(() => {
        store.setState({ query: 'TDD', loading: false });
        fixture.detectChanges();
      });

      it('should not show spinner', () => {
        expect(getSpinner()).toBeFalsy();
      });
    });

    describe('and the error happened on stock retrieval', () => {
      beforeEach(() => {
        store.setState({
          query: 'TDD',
          loading: false,
          error: new HttpErrorResponse({})
        });
        fixture.detectChanges();
      });

      it('should show error', () => {
        expect(getError()).toBeTruthy();
      });
    });

    describe('and stock details are loaded', () => {
      const symbol = 'TDD';
      const exchange = 'TESTAQ';
      const last = '123';
      const ccy = 'USD';
      const change = '100';
      const changePercent = '11';

      beforeEach(() => {
        store.setState({
          query,
          loading: false,
          result: {
            
          }
        });

        fixture.detectChanges();
      });

      it('should display the relevant caret item', () => {
        expect(getCaretUpDownItem()).toBeTruthy();
      });

      it('should display correct stock name, price, currency', () => {
        expect(getStocks().nativeElement.textContent.trim()).toEqual(
          `${symbol} ${last} ${ccy}`
        );
      });

      it('should display correct exchange', () => {
        expect(getExchange().nativeElement.textContent.trim()).toEqual(
          exchange
        );
      });

      it('should display correct change', () => {
        expect(getChange().nativeElement.textContent.trim()).toEqual(
          `${change} (${changePercent})`
        );
      });
    });
  });*/
});
