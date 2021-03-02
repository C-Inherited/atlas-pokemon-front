export class Pokemon {

    constructor(    
        private _id: number,
        private _name: string,
        private _hp: number,
        private _attack: number,
        private _defense: number,
        private _special_attack: number,
        private _special_defense: number,
        private _speed: number,
        private _types: string[],
        private _height: number,
        private _weight: number,
        private _abilities: string[],
        private _photo: string,
        private _artwork: string,
        private _show: boolean = false
    ){ }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

     get name(): string{
         return this._name;
     }

     set name(name: string){
         this._name = name;
     }

     get hp(): number{
         return this._hp;
     }

     set hp(hp: number){
         this._hp = hp;
     }

     get attack(): number{
         return this._attack;
     }

     set attack(attack: number){
         this._attack = attack;
     }

     get defense(): number{
         return this._defense;
     }

     set defense(defense: number){
         this._defense = defense;
     }

     get special_attack(): number{
         return this._special_attack;
     }

     set special_attack(special_attack: number){
         this._special_attack = special_attack;
     }

     get special_defense(): number{
         return this._special_defense;
     }

     set special_defense(special_defense: number){
         this._special_defense = special_defense;
     }

     get speed(): number{
         return this._speed;
     }

     set speed(speed: number){
         this._speed = speed;
     }

     get types(): string[]{
         return this._types;
     }

     set types(types: string[]){
         this._types = types;
     }

     get height(): number{
         return this._height;
     }

     set height(height: number){
         this._height = height;
     }

     get weight(): number{
         return this._weight;
     }

     set weight(weight: number){
         this._weight = weight;
     }

     get abilities(): string[]{
        return this._abilities;
    }

    set abilities(abilities: string[]){
        this._abilities = abilities;
    }

    get photo(): string{
        return this._photo;
    }

    set photo(photo: string){
        this._photo = photo;
    }

    get artwork(): string{
        return this._artwork;
    }

    set artwork(artwork: string){
        this._artwork = artwork;
    }

    get show(): boolean{
        return this._show;
    }

    set show(show: boolean){
        this._show = show;
    }

}