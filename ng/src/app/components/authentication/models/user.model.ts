export class User {

    constructor (

        private email: string,
        private password: string,
        private name?: string,
        private username?: string

    ) {}

    getDetails() {
        return {
            name: this.email,
            username: this.email,
            email: this.email,
            password: this.password
        }
    }

}
