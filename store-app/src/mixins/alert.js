export default {
    data() {
        return {
            showAlert: false,
            errorText: "",
        }
    },
    methods: {
        newError(string) {
            if (string && string != this.errorText) {
                this.addNewErrorText(string);
                this.toShowAlert();
            } else {
                this.toShowAlert();
            }
        },
        toShowAlert() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2500);
        },
        addNewErrorText(string) {
            this.errorText = string;
        }
    }
}