import { CounterSchema } from '../types/counterSchema';
import { CounterActions, CounterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(CounterReducer(state as CounterSchema, CounterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(CounterReducer(state as CounterSchema, CounterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(CounterReducer(undefined, CounterActions.increment()))
            .toEqual({ value: 1 });
    });
});
