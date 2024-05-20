

export interface IUser {
    userId?: number
    email: string
    password: string
    role?: string

}


export interface IUsers {
    token: string
    user: IUser
    message: string
}


export interface IPortfolio {
    portfolioId?: number
    title: string
    description: string
    image: string
}


export interface ICounseling {
    counselingId?: number
    name: string
    number: string
    message: string
}

export interface IServices {
    servicesId?: number
    name: string
}

export interface IOrder {
    orderId?: number
    servicesId?: number
    userId?: number
    budget: string
    number: string
    description: string
    status: string
}