export const a1 = class ingrediens {
    public salt: string;
    public dough: string;
    public water: string; //can be accessed everywhere
    protected otherspices: string; //can be accessed in subclass and in class
    private pepper: string; //can't be accessed only with in class
    readonly note?: string; //can only be updated by the constructor

    constructor(p_salt: string = "not given",
        p_dough: string = "not given",
        p_water: string = "not given",
        p_pepper: string = "not given",
        otherspecies: string = "not given",
        p_note: string = "don't disturb me",
    ) {

        this.salt = p_salt + " salt";
        this.dough = p_dough + " kg";
        this.water = p_water + " lt";
        this.pepper = p_pepper + " 10g";
        this.otherspices = otherspecies + "1000g";
        this.note = p_note;

    }
    public mixit() {
        return this.salt + ", " + this.dough + ", " + this.water;
    }
    public reducesalt() {
        return this.dough + ", " + this.water;
    }
    public givecost() {
        return "will provide u later";
    }
    public peppername = () => {
        return this.pepper + a2.hoola;
    }
    public otherspeciesname = () => {
        return this.otherspices;
    }
    static description() {
        return "we are going to make a dish over here";
    }
    public followup = () => {
        return this.note;
    }
}


export const a2 = class paneer extends a1 {
    public paneer: (string | number);
    private specialingredient: string;
    static hoola: string = " hoola";

    constructor(p_salt: string, p_dough: string, p_water: string, p_paneer: (string | number), p_specialingredient: string = "nothing") {
        super(p_dough, p_salt, p_water)
        this.paneer = p_paneer;
        this.specialingredient = p_specialingredient;
    }
    creatingpaneer = () => {
        return this.paneer + ", " + this.salt + ", " + this.water + this.givecost()
    }
    static freedal = () => { // static function can't use any parent properties or methods
        return "free dal for public"
    }
    rough1 = () => {
        return this.otherspices; // protected variable can be accessed in subclass as well 
    }
}

