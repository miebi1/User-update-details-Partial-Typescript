var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var getUserFromDatabase = function (userId) {
    // Mock function to return existing user data
    return {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        address: '123 Main St'
    };
};
var updateUser = function (userId, userDetails) {
    var existingUser = getUserFromDatabase(userId);
    var updatedUser = __assign(__assign({}, existingUser), userDetails);
    displayUpdatedUser(updatedUser);
};
var displayUpdatedUser = function (user) {
    var output = document.getElementById('output');
    if (output) {
        output.innerHTML = "\n            <h2>Updated User Details:</h2>\n            <p><strong>Name:</strong> ".concat(user.name, "</p>\n            <p><strong>Age:</strong> ").concat(user.age, "</p>\n            <p><strong>Email:</strong> ").concat(user.email, "</p>\n            <p><strong>Address:</strong> ").concat(user.address, "</p>\n        ");
    }
};
(_a = document.getElementById('updateForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var userDetails = {
        name: formData.get('name'),
        age: formData.get('age') ? Number(formData.get('age')) : undefined,
        email: formData.get('email'),
        address: formData.get('address'),
    };
    updateUser(1, userDetails);
});
