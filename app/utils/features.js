
const URL = "https://jsonplaceholder.typicode.com/users"

const getAllUsersData = async () => {
    const res = await fetch(URL)
    if (!res.ok)
        return new Error("Something went wrong")
    return await res.json()
}

const getUserDetails = async (id) => {
    const res = await fetch(`${URL}/${id}`)
    if (!res.ok)
        return new Error("Something went wrong")
    return await res.json()
}

export { getAllUsersData, getUserDetails };