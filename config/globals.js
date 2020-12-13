module.exports =
    {
    'db': 'mongodb+srv://Admin1:sTEU8oXnHbwYMccJ@adcluster.3wwwn.mongodb.net/tasks',
        ids: {
        'google': {
            clientID: '235072309408-uueiq921fma37mdmdvdnotg03uo08uk3.apps.googleusercontent.com',
            clientSecret: 'I6vAnkEzeoV0eaZknsaaeQU0',
            callbackURL: 'http://localhost:3000/google/callback'
            //callbackURL: 'https://task-manager-the2nd.herokuapp.com/google/callback'
        },
            'facebook': {
                clientID: '284983652946610',
                clientSecret: '3dff81e1932f00fe9d6cb0f5e22d89ca',
                callbackURL: 'http://localhost:3000/facebook/callback'
                //callbackURL: 'nodemon'
            }
        },
        'apiRoot': 'http://localhost:3000',
        'clientRoot': 'http://localhost:4200'
}