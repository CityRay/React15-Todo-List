const userReducer = function userReducer(user = {}, action) {
    switch (action.type) {
    case 'CREATE_USER_ID':
        return {
            username: user.username,
            memberId: action.id
        }

    default:
        return user
    }
}

export default userReducer
