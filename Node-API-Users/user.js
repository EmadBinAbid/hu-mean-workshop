users = 
[
    {
        name: "Ahsan Ayaz",
        email: "ahsan.ayaz@iomechs.com",
        id: 1
    },
    {
        name: "Siraj Ul Haq",
        email: "sirajulhaq@koderlabs.com",
        id: 2
    },
    {
        name: "Emad Bin Abid",
        email: "emad.bin.abid@gmail.com",
        id: 3
    }
]

exports.addUser = function(userObject)
{
    userObject.id = users.length + 1;
    users.push(userObject);
}

exports.deleteUser = function(userId)
{
    const user = users.find(u => u.id === parseInt(userId));
    if(!user)
    {
        return false;
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    return user;
}

exports.updateUser = function(userId, userObject)
{
    const user = users.find(u => u.id === parseInt(userId));
    if(!user)
    {
        return false;
    }
    const index = users.indexOf(user);
    
        if(userObject.name)
        {
            users[index].name = userObject.name;
        }
        if(userObject.email)
        {
            users[index].email = userObject.email;
        }
        return user;
}

exports.getUsers = function()
{
    return users;
}

exports.getUserById = function(userId)
{
    const user = users.find(u => u.id === parseInt(userId));
    if(!user)
    {
        return false;
    }
    return user;
}