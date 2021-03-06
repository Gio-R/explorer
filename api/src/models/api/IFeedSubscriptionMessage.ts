import { IFeedItemMetadata } from "./IFeedItemMetadata";

export interface IFeedSubscriptionMessage {
    /**
     * The subscription id created.
     */
    subscriptionId: string;

    /**
     * The latest items.
     */
    items: string[];

    /**
     * The items metadata.
     */
    itemsMetadata: {
        [id: string]: IFeedItemMetadata;
    };

    /**
     * The ips data.
     */
    ips: {
        /**
         * The start timestamp for the ips.
         */
        start: number;

        /**
         * The end timestamp for the ips.
         */
        end: number;

        /**
         * The item counts.
         */
        itemCount: number[];

        /**
         * The confirmed item counts.
         */
        confirmedItemCount: number[];
    };
}
