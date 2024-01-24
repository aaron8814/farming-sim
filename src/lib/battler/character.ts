export interface ICharacter {

    name: string;
    attack: number;
    health: number;
    damage: number;

    price?: number;
    id?: string;
}

export interface IConsumable {
    name: string;
    attack: number;
    health: number;
}