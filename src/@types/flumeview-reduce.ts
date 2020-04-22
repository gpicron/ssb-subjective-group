import { Callback } from '../model/Base'
import { Source } from 'pull-stream'

declare function FlumeViewReduce<T, U, R, S>(
    version: number,
    reduce: FlumeViewReduce.ReduceFunction<U, R>,
    map?: FlumeViewReduce.MapFunction<T, U>,
    codec?: FlumeViewReduce.Codec<R, S>,
    initialState?: R
): Function

declare type FlumeViewReduce<T, U, R, S> = typeof FlumeViewReduce

declare namespace FlumeViewReduce {
    export type MapFunction<T, U> = (value: T, seq?: number) => U | null
    export type ReduceFunction<U, R> = (state: R, value: U, seq?: number) => R

    export type Codec<I, O> = {
        encode: (input: I) => O
        decode: (output: O) => I
    }

    // TODO complete
    export interface View {
        ready(callback: Callback<void>): void
    }

    export interface ReducedView<R> extends View {
        get(callback: Callback<R>): void
        stream(): Source<R>
    }
}
export = FlumeViewReduce
