submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    if(checkValidation.invalidOptions.length == 0) {
        errorContainer.style.display = "block";
        errorMessageContainer.innerText = "information correct. Way to go!"
        errorMessageContainer.style.color = "green"
    } else {
        checkValidation.invalidOptions.forEach(node => {
            node.style.backgroundColor = "red";
        })
        errorContainer.style.display = "block";
        errorMessageContainer.innerText = "Fix incorrect information to submit"
        errorMessageContainer.style.color = "red"
    }

})

userInfo.addEventListener('keyup', (e) => {
    if(e.target.matches('#userEmail')) {
        checkValidation.checkEmailValidation(document.getElementById('userEmail'));
    }
    if(e.target.matches('#userCountry')) {
        checkValidation.checkCountryValidation(document.getElementById('userCountry'));
    }
    if(e.target.matches('#userZipCode')) {
        checkValidation.checkZipCodeValidation(document.getElementById('userZipCode'));
    }
    if(e.target.matches('#userPassword')) {
        checkValidation.checkPasswordValidation(document.getElementById('userPassword'))
    }
    if(e.target.matches('#userConfirmPassword')) {
        checkValidation.confirmPasswordValidation(document.getElementById('userConfirmPassword'))
    }
})

const checkValidation = (() => {
    const userEmail = document.getElementById('userEmail')
    const userZipCode = document.getElementById('userZipCode')
    const userPassword = document.getElementById('userPassword')
    const userConfirmPassword = document.getElementById('userConfirmPassword')

    let invalidOptions = [userEmail, userZipCode, userPassword, userConfirmPassword]
    let validOptions = []

    const addInvalidOption = (node) => {
        if (!(invalidOptions.includes(node))) {
            invalidOptions.push(node)
        }
        if (validOptions.includes(node)) {
            let index = validOptions.indexOf(node)
            validOptions.splice(index, 1)
        }
    }

    const addValidOption = (node) => {
        if (!(validOptions.includes(node))) {
            validOptions.push(node)
        }
        if (invalidOptions.includes(node)) {
            let index = invalidOptions.indexOf(node)
            invalidOptions.splice(index, 1)
        }
    }

    const inputValid = (node) => {
        errorContainer.style.display = 'none'
        node.style.backgroundColor = 'green'
        node.style.color = 'white';
    }

    const inputInvalid = (text, node) => {
        errorContainer.style.display = 'block'
        errorMessageContainer.innerText = text
        errorMessageContainer.style.color = 'red'
        node.style.backgroundColor = 'red'
        node.style.color = 'white';
    }

    const checkEmailValidation = (node) => {
        if (node.validity.typeMismatch) {
            inputInvalid('Email formatted incorrectly', node)
            addInvalidOption(node)
        }
        else {
            inputValid(node)
            addValidOption(node)
        }
    }

    const checkCountryValidation = (node) => {
        if (node.validity.rangeUnderflow) {
            inputInvalid('not enough characters', node)
            addInvalidOption(node)
        } else if (node.validity.rangeOverflow) {
            inputInvalid('too many characters', node)
            addInvalidOption(node)
        }  else {
            inputValid(node)
            addValidOption(node)
        }
    }

    const checkZipCodeValidation = (node) => {
        if (node.value.length < 5) {
            inputInvalid('not enough characters', node)
            addInvalidOption(node)
        } else {
            inputValid(node)
            addValidOption(node)
        }
    }

    const checkPasswordValidation = (node) => {
        if (node.value.length < 8) {
            inputInvalid('Password Too Short', node)
            addInvalidOption(node)
        } else if (node.value != userConfirmPassword.value) {
            inputInvalid("Passwords don't match", node)
            inputInvalid("passwords don't match", userConfirmPassword)
            addInvalidOption(node)
        } else {
            inputValid(node)
            inputValid(userConfirmPassword)
            addValidOption(node)
            addValidOption(userPassword)
        }
    }

    const confirmPasswordValidation = (node) => {
        if (node.value.length < 8) {
            inputInvalid('Password Too Short', node)
            addInvalidOption(node)
        } else if (node.value != userPassword.value) {
            inputInvalid("Passwords don't match", node)
            addInvalidOption(node)
        } else if (node.value == userPassword.value) {
            inputValid(node)
            inputValid(userPassword)
            addValidOption(node)
            addValidOption(userPassword)
        }
    }

    return { checkEmailValidation, checkCountryValidation, checkZipCodeValidation, checkPasswordValidation, confirmPasswordValidation, invalidOptions, validOptions}
})();