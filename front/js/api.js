export async function signup(email, username, password) {

    const response = await fetch(`http://localhost:3000/sign_up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            username,
            password
        })
    });

    return response.json();
}

export async function getEmail(email) {
    const response = await fetch(`http://localhost:3000/user/${email}`);

    if(!response.ok) {
        return null;
    }

    return response.json();
}