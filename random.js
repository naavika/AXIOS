

console.log('a')
console.log('b')
new Promise((resolve, reject) => {
    setTimeout(() => resolve('c'),1000)

}).then(data => {
    console.log(data);
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('d'),1000)

    }).then(data => {
        console.log(data);
        console.log('e')
    })
})

const data = await axios.get('https://crudcrud.com/api/2dbec22493074283b93afd498af74fcd')//returns a promise.then

function random() {
    return new Promise((resolve, reject) => {
    });
}
random().then(data => {
});

// Function to delete a user by _id
async function deleteUser(userId) {
    try {
        // Make a DELETE request to your server API with the userId
        const response = await axios.delete(`/api/users/${userId}`);
        
        // Assuming successful response
        if (response.status === 200) {
            // Remove the user detail from the website
            const userElement = document.querySelector(`[data-id="${userId}"]`);
            if (userElement) {
                userElement.parentNode.removeChild(userElement);
            }
        } else {
            console.error('Failed to delete user');
        }
    } catch (error) {
        console.error('Error deleting user', error);
    }
}

// Attach event listeners to delete buttons
const deleteButtons = document.querySelectorAll('.deleteButton');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the userId from the parent element's data-id attribute
        const userId = button.parentNode.getAttribute('data-id');
        deleteUser(userId);
    });
});

   
    
    

    

