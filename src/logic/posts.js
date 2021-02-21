export default class Posts {
    constructor() {
        this.posts = []
        this.size =  0
    }

    get Posts() {
        return this.posts
    }
    add(element) {
        let key = Object.keys(element)
        this.size = this.posts.push(element[key])
    }
    itr(element){
        let keys = Object.keys(element)
        // eslint-disable-next-line array-callback-return
        keys.map((key) => {
            let dump = element[key].posts
            let skey = Object.keys(dump)
            this.size = this.posts.push(dump[skey])
        })

    }


}
