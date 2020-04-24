
export interface ICurrencySettings  {
    /**
     * The fiat code for currency conversion.
     */
    fiatCode: string;

    /**
     * The time the last currency update happened.
     */
    lastCurrencyUpdate?: number;

    /**
     * The base currency for exchange rates.
     */
    baseCurrencyRate?: number;

    /**
     * The market cap.
     */
    marketCap?: number;

    /**
     * The volume in the last 24H.
     */
    volume24h?: number;

    /**
     * The percentage change in the last 24H.
     */
    percentageChange24h?: number;

    /**
     * The currencies used for conversion.
     */
    currencies?: {
        /**
         * Id of the currency.
         */
        id: string;
        /**
         * The rate.
         */
        rate: number;
    }[];
}
