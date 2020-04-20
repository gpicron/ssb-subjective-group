import { SubjectiveIdentityId, FeedId } from './Ids'
import * as about from './About'

// ---------------------------------------------------------------------

export type FeedWithMetainfo = {
    id: FeedId
    description: string
}

export class SubjectiveIdentity {
    readonly id: SubjectiveIdentityId | FeedId
    readonly feeds: ReadonlyArray<FeedId | FeedWithMetainfo>

    readonly name?: about.Name
    readonly image?: about.ImageLink
    readonly description?: string

    constructor(
        id: SubjectiveIdentityId | FeedId,
        feeds: ReadonlyArray<FeedId | FeedWithMetainfo>,
        name?: about.Name,
        image?: about.ImageLink,
        description?: string
    ) {
        this.id = id
        this.feeds = feeds
        this.name = name
        this.image = image
        this.description = description
    }

    /**
     * This attribute contains the list of all feed ids + the subjective id.  This is useful to perform 'in' query criteria on
     * ssb-backlinks and ssb-query.
     */

    get allIds(): ReadonlyArray<SubjectiveIdentityId | FeedId> {
        const allIds = [
            this.id,
            ...this.feeds.map(value =>
                (value as FeedWithMetainfo).id
                    ? (value as FeedWithMetainfo).id
                    : (value as FeedId)
            )
        ]

        return Array.from(new Set(allIds))
    }
}
