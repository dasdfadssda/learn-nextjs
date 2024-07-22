export default function MovieDetail({
    params: { id },
}: {
    params: { id: string }
}
) {
    return <div>
        <h1>Movie {id}</h1>
    </div>
}