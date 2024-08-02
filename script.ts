interface User {
    name: string;
    age: number;
    email: string;
    address: string;
}

const getUserFromDatabase = (userId: number): User => {
    // Mock function to return existing user data
    return {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        address: '123 Main St'
    };
};

const saveUserToDatabase = (userId: number, user: User): void => {
    // Mock function to save updated user data
    console.log('User saved to database:', user);
};

const updateUser = (userId: number, userDetails: Partial<User>): void => {
    const existingUser = getUserFromDatabase(userId);
    const updatedUser = { ...existingUser, ...userDetails };
    saveUserToDatabase(userId, updatedUser);
    displayUpdatedUser(updatedUser);
};

const displayUpdatedUser = (user: User): void => {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `
            <h2>Updated User Details:</h2>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address}</p>
        `;
    }
};

document.getElementById('updateForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const userDetails: Partial<User> = {
        name: formData.get('name') as string,
        age: formData.get('age') ? Number(formData.get('age')) : undefined,
        email: formData.get('email') as string,
        address: formData.get('address') as string,
    };
    updateUser(1, userDetails);
});