import { FeedId, SubjectiveIdentityId } from './Ids'
import * as about from './About'
import {
    AboutFeedIdMessage,
    SubjectiveGroupAboutMessage,
    SubjectiveGroupAboutMessageSigned
} from './About'

// ---------------------------------------------------------------------

export type FeedWithMetainfo = {
    id: FeedId
    description: string
}

export class SubjectiveIdentity {
    id: SubjectiveIdentityId | FeedId
    readonly feeds: Array<FeedId | FeedWithMetainfo>

    name?: about.Name
    image?: about.ImageLink
    description?: string

    constructor(
        id: SubjectiveIdentityId | FeedId,
        feeds: ArrayLike<FeedId | FeedWithMetainfo>,
        name?: about.Name,
        image?: about.ImageLink,
        description?: string
    ) {
        this.id = id
        this.feeds = Array.from(feeds)
        this.name = name
        this.image = image
        this.description = description
    }

    public static from(
        msg: AboutFeedIdMessage | SubjectiveGroupAboutMessage
    ): SubjectiveIdentity {
        const subjectiveId: SubjectiveIdentityId = (msg as SubjectiveGroupAboutMessage)
            .subjectiveId

        if (subjectiveId) {
            return new SubjectiveIdentity(
                subjectiveId,
                [msg.about],
                msg.name,
                msg.image,
                msg.description
            )
        } else {
            return new SubjectiveIdentity(
                msg.about,
                [msg.about],
                msg.name,
                msg.image,
                msg.description
            )
        }
    }

    /**
     * This attribute contains the list of all feed ids + the subjective id.  This is useful to perform 'in' query criteria on
     * ssb-backlinks and ssb-query.
     */

    get allIds(): ReadonlyArray<SubjectiveIdentityId | FeedId> {
        const allIds = [this.id, ...this.feedIds]

        return allIds
    }
    get feedIds(): ReadonlyArray<FeedId> {
        return this.feeds.map(value =>
            (value as FeedWithMetainfo).id
                ? (value as FeedWithMetainfo).id
                : (value as FeedId)
        )
    }

    public updateWith(content: SubjectiveGroupAboutMessageSigned): void {
        if (!this.feedIds.includes(content.about))
            this.feeds.push(content.about)
        if (content.name) this.name = content.name
        if (content.image) this.image = content.image
        if (content.description) this.description = content.description
    }
}
