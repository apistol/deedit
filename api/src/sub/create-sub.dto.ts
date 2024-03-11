export class CreateSubDto {
  name?: string
  title: string
  description?: string
  imageUrn: string
  bannerUrn: string
  username?: string
  user?: string
  posts?: string

  constructor(
    name: string,
    title: string,
    description: string,
    imageUrn: string,
    bannerUrn: string,
    username: string,
    user: string,
    posts: string,
  ) {
    this.name = name
    this.title = title
    this.description = description
    this.imageUrn = imageUrn
    this.bannerUrn = bannerUrn
    this.username = username
    this.user = user
    this.posts = posts
  }
}
