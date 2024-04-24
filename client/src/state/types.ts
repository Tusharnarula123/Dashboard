export interface ExpensesbyCategory{
    salaries:number;
    supplies:number;
    services:number;
}
export interface Month{
    id:string;
    month:string;
    revenue:number;
    expenses:number;
    nonOperationalExpenses:number;
    operationalExpenses:number;

}
export interface Day{
    id:string;
    month:string;
    revenue:number;
    expenses:number;

}


export interface GetKpisResponse{
    id:string;
    _id:string;
    __v:number;
    totalProfit:number;
    totalRevenue:number;
    totalExpenses:number;
    Category:ExpensesbyCategory;
    monthlyData:Array<Month>;
    dailyData:Array<Day>;
    createdAt:ExpensesbyCategory;
    updatedAt:Array<Month>;
}
export interface GetProductsResponse{
    id:string;
    _id:string;
    __v:number;
    price:number;
    expense:number;
    transactions:number;
    createdAt:string;
    updatedAt:string;
    
}
export interface GetTransactionsResponse{
    id:string;
    _id:string;
    __v:number;
    buyer:string;
    amount:number;
    ProductIds:Array<string>;
    createdAt:string;
    updatedAt:string;
    
}