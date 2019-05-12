export interface ITask{
    id:number,
    name:string,
    status:string,
    created_at:Date,
}

export interface IAuthResponse{
    token: string,
    user_id: number,
    username: string
}

export interface ISupplement{
<<<<<<< HEAD
    id: number,
=======
    id:number,
>>>>>>> ee5f31b127549a14a1b729feb98984ec758e31ea
    title: string,
    description: string
}

export interface IDiet{
    id: number,
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
<<<<<<< HEAD
}

export interface IExercise{
    id: number,
    title: string,
    photo_link: string,
    equipment_needed: string,
    how_to_do_tips:string
=======
>>>>>>> ee5f31b127549a14a1b729feb98984ec758e31ea
}