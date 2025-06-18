export interface IAlert
{
    badgeColor:string;
    badgeText:() => string;
    Date:string;
    ProductId:string;
    ProductDescription:string;
    Rule:string;
    Diff:number;
    Open:number;
}

export class Alert implements IAlert {
    badgeColor="";
    Date="";
    ProductId="";
    ProductDescription="";
    Rule="";
    Diff=-1;
    Open=-1;
    badgeText = ():string => {
        switch (this.badgeColor) {
            case "bg-danger":{
                return "Urgent"
            }
            case "bg-info":{
                return "Normal"
            }
        }
        return "";
    };
}