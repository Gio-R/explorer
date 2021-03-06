import { IResponse } from "./IResponse";
import { ISignedResponse } from "./ISignedResponse";

export interface ICurrenciesResponse extends IResponse, ISignedResponse {
    /**
     * The time the data was last updated..
     */
    lastUpdated?: number;

    /**
     * The exchange rate for the base currency.
     */
    baseRate?: number;

    /**
     * The market cap.
     */
    marketCap?: number;

    /**
     * The volume in the last 24H.
     */
    volume24h?: number;

    /**
     * The currencies and their exchange rates from base rate.
     */
    currencies?: { [id: string]: number };
}
