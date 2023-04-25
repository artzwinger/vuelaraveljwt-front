export const loginFormSchema = [
    {
        $formkit: 'text',
        name: 'email',
        label: 'E-Mail',
        validation: 'required|email'
    },
    {
        $formkit: 'password',
        name: 'password',
        label: 'Пароль',
        validation: 'required'
    }
]