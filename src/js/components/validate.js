import validateForms from '../functions/validate-forms';

const contactsUsRules = [{
        ruleSelector: '.form-primary__input--name',
        rules: [{
                rule: 'minLength',
                value: 15,
                errorMessage: 'Full name must be at least :value characters long',
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Fill In The Full Name!'
            }
        ]
    },
    {
        ruleSelector: '.form-primary__input--tel',
        tel: true,
        telError: 'Please enter a valid phone number',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Fill out the phone!'
        }]
    },
    {
        ruleSelector: '.form-primary__input--email',
        rules: [{
                rule: 'required',
                errorMessage: 'Enter your email',
            },
            {
                rule: 'email',
                errorMessage: 'Email is incorrect!',
            }
        ]
    },
];


const afterForm = () => {
    console.log('Sending happened :)');
};

validateForms('.contacts-us__form', contactsUsRules, afterForm);
