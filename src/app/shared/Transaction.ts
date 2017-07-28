export class Transaction {
    constructor(
        public id: number = undefined,
        public unitPrice: number = undefined,
        public ticketId: number = undefined,
        public quantity: number = undefined
    ) {}
}