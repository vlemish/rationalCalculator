export class RationalNumber {
    integer : number;
    numerator : number;
    denumerator : number;
    /**
     *
     */
    constructor(int : number, num : number, denum : number) {
        this.integer=int;
        this.numerator=num;
        this.denumerator=denum;
    }

    toString() : string {
        return this.integer + "." + this.numerator + "/" + this.denumerator;
    }
}
