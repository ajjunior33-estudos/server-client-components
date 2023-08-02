import { Dialog } from "./Dialog";

export interface GithubUserProps {
    username: string;
}

export async function GithubUser({ username }: GithubUserProps) {
    const response = await fetch(`http://api.github.com/users/${username}`)
    const user = await response.json()

    await new Promise(resolve => setTimeout(resolve, 3000))
    return (
        <div>

            <h1>{JSON.stringify(user)}</h1>
            <Dialog />
        </div>
    )
}