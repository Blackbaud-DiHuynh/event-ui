export class Ticket {
    constructor(
        public id: number = -1,
        public basePrice: number = undefined,
        public eventId: number = undefined,
        public currentPrice: number = undefined,
    ) {}
}