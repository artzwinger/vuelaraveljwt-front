export const registerFormSchema = [
    {
        $formkit: 'text',
        name: 'first_name',
        label: 'Имя',
        validation: 'required'
    },
    {
        $formkit: 'text',
        name: 'last_name',
        label: 'Фамилия',
        validation: 'required'
    },
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
    },
    {
        $formkit: 'password',
        name: 'password_confirmation',
        label: 'Повторите пароль',
        validation: 'required|confirm',
    },
    {
        $formkit: 'checkbox',
        name: 'accept_rules',
        type: 'checkbox',
        id: 'rules',
        validation: 'accepted',
        label: 'Даю согласие на обработку персональных данных',
    }
]