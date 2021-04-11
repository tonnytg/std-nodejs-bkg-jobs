import Queue from '../lib/queue'

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        // Job Registration
        // await Queue.add({ user })
        await Queue.add('RegistrationMail', { user })

        await Queue.add('UserReport', { user })

        return res.json(user);
    }
};