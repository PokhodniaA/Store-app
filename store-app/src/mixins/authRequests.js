export default {
    methods: {
        async authorizationUserRequest() {
            try {
                const user = await (
                    await fetch("http://localhost:3003/auth", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(this.userData),
                    })
                ).json();

                if (!user.error) {
                    this.$store.commit("SIGNIN", user);
                    this.showMainPage();
                } else {
                    this.newError(
                        "Такого аккаунта не существует. Вы можете зарегестрироваться!"
                    );
                }
            } catch (e) {
                this.newError("Упссссс..... Произошла ошибка.");
                console.log(e);
            }
        },
        async registrationUserRequest() {
            try {
                const user = await (
                    await fetch("http://localhost:3003/registr", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(this.userData),
                    })
                ).json();

                if (!user.error) {
                    this.$store.commit("SIGNIN", user);
                    this.showMainPage();
                } else {
                    this.newError("Такой пользователь существует!");
                }
            } catch (e) {
                this.newError("Упссссс..... Произошла ошибка.");
                console.log(e);
            }
        },
        showMainPage() {
            this.$router.push("/");
        },
    }
}