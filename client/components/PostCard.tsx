import Link from 'next/link'
import { Fragment } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../types'
import Axios from 'axios'

dayjs.extend(relativeTime)

const ActionButton = ({ children }) => {
    return (
        <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
            {children}
        </div>
    )
}

interface PostCardProps {
    post: Post
}

export default function PostCard({
                                     post: {
                                         identifier,
                                         slug,
                                         title,
                                         body,
                                         subName,
                                         createdAt,
                                         voteScore,
                                         userVote,
                                         commentCount,
                                         url,
                                         username,
                                     },
                                 }: PostCardProps) {
    const vote = async (value) => {
        try {
            const res = await Axios.post('/misc/vote', {
                identifier,
                slug,
                value,
            })

            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div key={identifier} className="flex mb-4">
            {/* Vote section */}
            <div className="w-10 py-3 text-center flex flex-col justify-center align-items-center">
                {/* Upvote */}
                <div
                    className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500"
                    onClick={() => vote(1)}
                >
                    <FontAwesomeIcon icon={faArrowUp} className={classNames('icon-arrow-up w-4 m-auto', {
                        'text-red-500': userVote === 1,
                    })}/>
                </div>
                <p className="text-xs font-bold">{voteScore}</p>
                {/* Downvote */}
                <div
                    className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600"
                    onClick={() => vote(-1)}
                >
                    <FontAwesomeIcon icon={faArrowDown} className={classNames('icon-arrow-down w-4 m-auto', {
                        'text-red-500': userVote === -1,
                    })}/>
                </div>
            </div>



            {/* Post data section */}
                    {/*<Link href={`/r/${subName}`}>*/}
                    {/*    <Fragment>*/}
                    {/*        <img*/}
                    {/*            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"*/}
                    {/*            className="w-6 h-6 mr-1 rounded-full cursor-pointer"*/}
                    {/*        />*/}
                    {/*        <span className="text-xs font-bold cursor-pointer hover:underline">*/}
                    {/*            /r/{subName}*/}
                    {/*        </span>*/}
                    {/*    </Fragment>*/}
                    {/*</Link>*/}
                    {/*<p className="text-xs text-gray-500">*/}
                    {/*    <span className="mx-1">•</span>*/}
                    {/*    Posted by*/}
                    {/*    <Link href={`/u/${username}`}>*/}
                    {/*        <span className="mx-1 hover:underline">/u/{username}</span>*/}
                    {/*    </Link>*/}
                    {/*    <Link href={`${url}`}>*/}
                    {/*        <span className="mx-1 hover:underline">*/}
                    {/*            {dayjs(createdAt).fromNow()}*/}
                    {/*        </span>*/}
                    {/*    </Link>*/}
                    {/*</p>*/}


                <Link href={`${url}`}>
                    <span className="my-1 text-lg font-medium">{title}</span>
                </Link>


                {body && <p className="my-1 text-sm">{body}</p>}

                <div className="flex flex-col">
                    <Link href={`${url}`}>
                        <span>
                            <ActionButton>
                                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                                <span className="font-bold">{commentCount} Comments</span>
                            </ActionButton>
                        </span>
                    </Link>
                    <ActionButton>
                        <i className="mr-1 fas fa-share fa-xs"></i>
                        <span className="font-bold">Share</span>
                    </ActionButton>
                    <ActionButton>
                        <i className="mr-1 fas fa-bookmark fa-xs"></i>
                        <span className="font-bold">Save</span>
                    </ActionButton>
                </div>
            </div>
    )
}