export class CreateCommentDto {
    identifier? :string
    title? :string
    sub? :string
    body :string
    subName? :string
    username? :string
    user? :string
    comments? :string
    votes? :string
    postId : string
    constructor(
        identifier :string,
        title :string,
        sub :string,
        body :string,
        subName :string,
        username :string,
        user :string,
        comments :string,
        votes :string,
        postId: string

    ) {
            this.identifier = identifier
            this.title = title
            this.sub = sub
            this.body = body
            this.subName = subName
            this.username = username
            this.user = user
            this.comments = comments
            this.votes = votes
            this.postId = postId
    }
}
