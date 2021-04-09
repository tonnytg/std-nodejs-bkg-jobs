import Mail from '../lib/Mail'

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        await Mail.sendMail({
            from: 'Antonio <tonnytg@gmail.com>',
            to: ` ${ name } <${ email }> `,
            subject: 'Cadastro',
            html: `ola ${ name }, bem vindo`
        })

        return res.json(user);
    }
};