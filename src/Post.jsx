import { useParams } from "react-router-dom"

export default function Post() {
    const {postId} = useParams()

    // get the post from the database

    return (
        <div>
            this is a post with id {postId}
        </div>
    )
}