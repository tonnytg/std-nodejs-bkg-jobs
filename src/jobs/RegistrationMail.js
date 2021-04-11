import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }){
        const { user } = data;

        await Mail.sendMail({
            from: 'Antonio <tonnytg@gmail.com>',
            to: ` ${ user.name } <${ user.email }> `,
            subject: 'Cadastro2',
            html: `ola ${ user.name }, bem vindo`
        })
    }
}