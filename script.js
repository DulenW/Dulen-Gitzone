// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example function to load user data from JSON
    function loadUserData() {
        // This could be replaced with an actual API call
        const userData = {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "contact": {
                "phone": "+1-555-555-5555",
                "address": {
                    "street": "123 Main St",
                    "city": "Anytown",
                    "state": "CA",
                    "zipCode": "12345"
                }
            },
            "active": true,
            "roles": ["user", "admin"],
            "lastLogin": "2024-01-24T10:30:00Z"
        };

        // Update DOM elements with user data
        document.getElementById('userId').textContent = userData.id;
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userPhone').textContent = userData.contact.phone;
        
        // Format address
        const address = userData.contact.address;
        document.getElementById('userAddress').innerHTML = 
            `${address.street}<br>${address.city}, ${address.state} ${address.zipCode}`;
        
        // Update roles
        const rolesContainer = document.getElementById('userRoles');
        rolesContainer.innerHTML = userData.roles
            .map(role => `<span class="role-badge">${role}</span>`)
            .join('');
            
        // Format and update last login
        document.getElementById('lastLogin').textContent = 
            new Date(userData.lastLogin).toLocaleString();
    }

    // Load user data when the page loads
    loadUserData();
});
