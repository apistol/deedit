export class CreatePostDto {
    identifier? :string
    title :string
    slug? :string
    sub :string
    body :string
    subName? :string
    username? :string
    user? :string
    comments? :string
    votes? :string

    constructor(
        identifier :string,
        title :string,
        slug :string,
        sub :string,
        body :string,
        subName :string,
        username :string,
        user :string,
        comments :string,
        votes :string,

    ) {
            this.identifier = identifier
            this.title = title
            this.slug = slug
            this.sub = sub
            this.body = body
            this.subName = subName
            this.username = username
            this.user = user
            this.comments = comments
            this.votes = votes
    }
}
