export class Quote {
    constructor (
    public quote: string,
    public author: string,
    public personSubmitting: string,
    public dateSubmitted: Date,
    public upVote: number,
    public downVote: number
    )

    { 
    
    }
}
