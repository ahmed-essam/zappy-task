export class Tweet {
    id: string;
    body:string;
    created_at:string;
    image:string;
    constructor(private tweet:any){
        this.id = tweet.id;
        this.body = tweet.body;
        this.created_at = tweet.created_at;

    }
}