export interface ITask{
    id:number,
    name:string,
    status:string,
    created_at:string,
}

export interface IAuthResponse{
    token: string,
    user_id: number,
    username: string
}

export interface ISupplement{
    id:number,
    title: string,
    description: string
}

export interface IDiet{
    title: string,
    description: string,
    id: number
}

export interface IRegResponse{
    token: string,
    user_id: number,
    username: string
}

export interface IExerciseCategory{
    id: number,
    name: string
}

export interface IProfile{
    id: number,
    first_name: string,
    second_name: string,
    task_count: number,
    overall_body_test: number,
    allergies: string,
    blood_pressure: string,
}

export interface IUserProfileList{
    id: number,
    username: string,
    email: string,
    is_superuser: string
}