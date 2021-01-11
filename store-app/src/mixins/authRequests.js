export default {
    methods: {
        async sendAjax(path, method, data) {
            try {
                return await (
                    await fetch(`http://localhost:3003${path}`, {
                        method: method,
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(data),
                    })
                ).json();
            } catch (e) {
                this.newError("Упссссс..... Произошла ошибка.");
                console.log(e);
            }
        },
        authorizationUserRequest() {
            this.sendAjax('/auth', 'POST', this.userData)
                .then(
                    result => {
                        if (!result.error) {
                            this.showMainPage(result);
                        } else {
                            this.newError(
                                "Такого аккаунта не существует. Вы можете зарегестрироваться!"
                            );
                        }
                    }
                )
        },
        registrationUserRequest() {
            this.sendAjax('/registr', 'POST', this.userData)
                .then(
                    result => {
                        if (!result.error) {
                            this.showMainPage(result);
                        } else {
                            this.newError("Такой пользователь существует!");
                        }
                    }
                )
        },
        showMainPage(result) {
            this.$store.commit("SIGNIN", result);
            this.$router.push("/");
        },
    }
}