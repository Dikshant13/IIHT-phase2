export interface ILocation{
    address:string,
    city:string,
    country:string
}

export interface ISession{
    id:string,
    name:string,
    presenter:string,
    duration:string,
    level:string,
    voters:string[]
}

export interface IEvent{
    id:string,
    name:string,
    date:string,
    time:string,
    price:number,
    imageUrl:string,
    location:ILocation,
    sessions:ISession[]

}