export interface RecurringPayment {
    name: string;
    amount: number;
    status: 'Paid' | 'Due';
    timeline: number
}